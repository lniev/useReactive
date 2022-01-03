import { useEffect, useState, useRef } from "react";

class ProxyHandler {
  constructor(state = {}, setState) {
    this.state = state;
    this.setState = setState;
  }
  set(target, key, value) {
    let result = false;
    // eslint-disable-next-line default-case
    switch (this.getType()) {
      case "Object":
        result = this.objectSet(target, key, value);
        break;
      case "Array":
        result = this.arraySet(target, key, value);
        break;
    }
    return result;
  }
  arraySet(target, key, value) {
    const newTarget = target.concat();
    newTarget[key] = value;
    this.setState(newTarget);
    return true;
  }
  objectSet(target, key, value) {
    this.setState({ ...target, [key]: value });
    return true;
  }
  getType() {
    return Object.prototype.toString.call(this.state).slice(8, -1);
  }
}
const useReactive = (initialState) => {
  const [state, setState] = useState(initialState);
  const preProxyState = useRef();
  const _ProxyHandler = new ProxyHandler(state, setState);
  const proxyHandler = {
    set: _ProxyHandler.set.bind(_ProxyHandler),
  };
  let stateProxy = Proxy.revocable(state, proxyHandler);
  useEffect(() => {
    if (preProxyState.current) {
      preProxyState.current.revoke();
    }
    preProxyState.current = stateProxy;
    return () => {
      // 页面卸载的时候取消代理
      stateProxy.revoke();
      stateProxy = null;
    };
  }, [stateProxy]);
  return [stateProxy.proxy, setState];
};

export default useReactive;

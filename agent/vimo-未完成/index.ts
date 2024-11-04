import { HookApp, log } from './agent/Utils.js';

// HookApp('Paper', (hook, getPointer, getClassMethod, appBaseAddr) => {
//   hook(
//     getClassMethod('ProStatusModule', '- isPro'),
//     (ths, retv) => {
//       retv.replace(ptr(1));
//     },
//     (ths, args) => {}
//   );
// });
HookApp('Vimo', (hook, getPointer, getClassMethod, appBaseAddr) => {
  // 这里列出了你想要打印的实例变量的列表，你可以根据需要添加更多的实例变量
  const ivars = ['_storeProducts', '_storeSubscription', '_purchasedProducts', '_purchasedSubscription', '_subscriptionGroupStatus', '_free_trial_expired', '_transDict', '_updateListenerTask', '_status', '_semaphore', '_productDict'];

  ivars.forEach(ivar => {
    hook(
      getClassMethod('TtC13Vimo_Rebinder8StoreMgr', '- ' + ivar),
      (ths, retv) => {
        // 在方法执行后打印实例变量的值
        log(`[+] ${ivar} value: ${retv.readPointer().toString()}`);
      },
      (ths, args) => {}
    );
  });
});
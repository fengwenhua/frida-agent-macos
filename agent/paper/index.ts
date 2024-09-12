import { HookApp, log } from './agent/Utils.js';

HookApp('Paper', (hook, getPointer, getClassMethod, appBaseAddr) => {
  hook(
    getClassMethod('ProStatusModule', '- isPro'),
    (ths, retv) => {
      retv.replace(ptr(1));
    },
    (ths, args) => {}
  );
});

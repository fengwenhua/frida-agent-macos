import { HookApp, log } from './agent/Utils.js';

HookApp('HapiGo', (hook, getPointer, getClassMethod, appBaseAddr) => {
  hook(
    getPointer('0x302630'),
    (ths, retv) => {
      retv.replace(ptr(1));
    },
    (ths, args) => {}
  );
});

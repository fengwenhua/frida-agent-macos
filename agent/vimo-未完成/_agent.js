📦
874 /index.js.map
1001 /index.js
2231 /agent/Utils.js.map
2223 /agent/Utils.js
✄
{"version":3,"file":"index.js","sourceRoot":"/Users/panghoo/Code/crack/frida-agent-macos/","sources":["index.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,OAAO,EAAE,GAAG,EAAE,MAAM,kBAAkB,CAAC;AAEhD,wEAAwE;AACxE,UAAU;AACV,oDAAoD;AACpD,uBAAuB;AACvB,8BAA8B;AAC9B,SAAS;AACT,wBAAwB;AACxB,OAAO;AACP,MAAM;AACN,OAAO,CAAC,MAAM,EAAE,CAAC,IAAI,EAAE,UAAU,EAAE,cAAc,EAAE,WAAW,EAAE,EAAE;IAChE,sCAAsC;IACtC,MAAM,KAAK,GAAG,CAAC,gBAAgB,EAAE,oBAAoB,EAAE,oBAAoB,EAAE,wBAAwB,EAAE,0BAA0B,EAAE,qBAAqB,EAAE,YAAY,EAAE,qBAAqB,EAAE,SAAS,EAAE,YAAY,EAAE,cAAc,CAAC,CAAC;IAExO,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,EAAE;QACnB,IAAI,CACF,cAAc,CAAC,6BAA6B,EAAE,IAAI,GAAG,IAAI,CAAC,EAC1D,CAAC,GAAG,EAAE,IAAI,EAAE,EAAE;YACZ,iBAAiB;YACjB,GAAG,CAAC,OAAO,IAAI,WAAW,IAAI,CAAC,WAAW,EAAE,CAAC,QAAQ,EAAE,EAAE,CAAC,CAAC;QAC7D,CAAC,EACD,CAAC,GAAG,EAAE,IAAI,EAAE,EAAE,GAAE,CAAC,CAClB,CAAC;IACJ,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC"}
✄
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
        hook(getClassMethod('TtC13Vimo_Rebinder8StoreMgr', '- ' + ivar), (ths, retv) => {
            // 在方法执行后打印实例变量的值
            log(`[+] ${ivar} value: ${retv.readPointer().toString()}`);
        }, (ths, args) => { });
    });
});
✄
{"version":3,"file":"Utils.js","sourceRoot":"/Users/panghoo/Code/crack/frida-agent-macos/","sources":["agent/Utils.ts"],"names":[],"mappings":"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"}
✄
export function log(...message) {
    console.log(...message);
}
var AccessType;
(function (AccessType) {
    AccessType[AccessType["Pointer"] = 0] = "Pointer";
    AccessType[AccessType["ObjectCFunction"] = 1] = "ObjectCFunction";
})(AccessType || (AccessType = {}));
export function HookApp(module, hookStart) {
    var appBaseAddr = Module.findBaseAddress(module);
    log(`App [${module}] 内存基址: ${appBaseAddr}`);
    let init = (appBaseAddr) => {
        let hook = (target, leave, enter) => {
            attachTarget(target, appBaseAddr, enter, leave, module);
        };
        hookStart(hook, (offsetMemmory) => {
            return {
                target: appBaseAddr.add(offsetMemmory),
                msgTag: "0x" + offsetMemmory.toString(16),
                accessType: AccessType.Pointer,
            };
        }, (clazzName, clazzMethodSign) => {
            return {
                target: ObjC.classes[clazzName][clazzMethodSign].implementation,
                accessType: AccessType.ObjectCFunction,
                msgTag: clazzName + " [" + clazzMethodSign + "]",
            };
        }, appBaseAddr, {
            watchMemory: (target) => {
                MemoryAccessMonitor.enable({
                    base: new NativePointer(target.target),
                    size: 16,
                }, {
                    onAccess: function (details) {
                        log("对内存[" + target.msgTag + "]访问来自", details.from.sub(appBaseAddr).toString());
                    },
                });
            },
        });
    };
    if (appBaseAddr != null)
        init(appBaseAddr);
}
function attachTarget(target, appBaseAddr, enter, leave, module) {
    var line = "=".repeat(32);
    Interceptor.attach(target.target, {
        onEnter(args) {
            log(line + ` \n${module} 进入函数 ` + target.msgTag + "\n");
            enter?.(this, args);
            log(line, "\n");
        },
        onLeave(retval) {
            log(line + ` \n${module} 退出函数 ` + target.msgTag + "\n");
            log("修改前返回值", retval);
            leave?.(this, retval);
            log("修改后返回值", retval, "\n" + line, "\n");
        },
    });
}
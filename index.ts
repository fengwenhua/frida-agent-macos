import { HookApp, log } from "./agent/Utils.js";

HookApp("Navicat Premium", (hook, getPointer, getClassMethod, appBaseAddr) => {
  hook(
    getClassMethod("IAPHelper", "- productSubscriptionStillHaveTrialPeriod"),
    (ths, retv) => {
      retv.replace(ptr(0));
    },
    (ths, args) => {
    }
  );

  hook(
    getClassMethod("IAPHelper", "- isProductSubscriptionInGracePeriod"),
    (ths, retv) => {
      retv.replace(ptr(0));
    },
    (ths, args) => {}
  );

  hook(
    getClassMethod("IAPHelper", "- isProductSubscriptionStillValid"),
    (ths, retv) => {
      retv.replace(ptr(1));
    },
    (ths, args) => {}
  );

  Interceptor.replace(
    new NativeFunction(
      getClassMethod("AppStoreReceiptValidation", "+ validate").target,
      "void",
      []
    ),
    new NativeCallback(
      function () {
        console.log("Hook ptrace Bypass!!!");
      },
      "void",
      []
    )
  );
});

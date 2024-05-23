import { HookApp, log } from "./Utils.js";

HookApp("Navicat Premium", (hook, getPointer, getClassMethod, appBaseAddr) => {
  hook(
    getClassMethod("IAPHelper", "- productSubscriptionStillHaveTrialPeriod"),
    (ths, retv) => {
      log(
        "IAPHelper productSubscriptionStillHaveTrialPeriod return value:" + retv
      );
      log("return value:" + retv);
      retv.replace(ptr(0));
    },
    (ths, args) => {
      log(
        "IAPHelper productSubscriptionStillHaveTrialPeriod: hooked in.."
      );
    }
  );
});

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Date    : 2024-05-24 00:08:59
# @Author  : 江南小虫虫 (fwh13612265462@gmail.com)
# @Link    : https://www.fengwenhua.top


import frida
import os


def Paste():
    launchApp("/Applications/Paste.app/Contents/MacOS/Paste")


def launchApp(image, js="_agent.js"):
    pid = frida.spawn(image)
    frida.resume(pid)
    os.system(f"frida -p {pid} -l {js} --debug --runtime=v8")


if __name__ == "__main__":
    Paste()

#!/usr/bin/env node

const { main } = require('appium');
const { registerDriver } = require('appium/driver');

const UiAutomator2Driver = require('appium-uiautomator2-driver');

// Register the driver manually
registerDriver('uiautomator2', UiAutomator2Driver)

main();
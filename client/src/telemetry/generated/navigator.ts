/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// AUTOGENERATED BY glean_parser v6.2.1. DO NOT EDIT. DO NOT COMMIT.

import StringMetricType from "@mozilla/glean/private/metrics/string";
import QuantityMetricType from "@mozilla/glean/private/metrics/quantity";

/**
 * The navigators ISO 3166 country name (not code) based on geo ip.
 *
 * Generated from `navigator.geo`.
 */
export const geo = new StringMetricType({
  category: "navigator",
  name: "geo",
  sendInPings: ["action", "page"],
  lifetime: "application",
  disabled: false,
});

/**
 * The navigators user agent.
 *
 * Generated from `navigator.user_agent`.
 */
export const userAgent = new StringMetricType({
  category: "navigator",
  name: "user_agent",
  sendInPings: ["action", "page"],
  lifetime: "application",
  disabled: false,
});

/**
 * The subscription type of the user. can be one of
 * 'core','mdn_plus_5m','mdn_plus_5y','mdn_plus_10m','mdn_plus_10y'
 *
 * Generated from `navigator.subscription_type`.
 */
export const subscriptionType = new StringMetricType({
  category: "navigator",
  name: "subscription_type",
  sendInPings: ["action", "page"],
  lifetime: "application",
  disabled: false,
});

/**
 * The currently displayed viewport breakpoint,
 * one of "xs", "sm", "md","lg", "xl" or "xxl".
 *
 * Generated from `navigator.viewport_breakpoint`.
 */
export const viewportBreakpoint = new StringMetricType({
  category: "navigator",
  name: "viewport_breakpoint",
  sendInPings: ["action", "page"],
  lifetime: "application",
  disabled: false,
});

/**
 * The ratio of viewport width to viewport height,
 * expressed as a percentage.
 *
 * Generated from `navigator.viewport_ratio`.
 */
export const viewportRatio = new QuantityMetricType({
  category: "navigator",
  name: "viewport_ratio",
  sendInPings: ["action", "page"],
  lifetime: "application",
  disabled: false,
});

/**
 * The ratio of viewport width to screen width, expressed as a percentage.
 *
 * Generated from `navigator.viewport_horizontal_coverage`.
 */
export const viewportHorizontalCoverage = new QuantityMetricType({
  category: "navigator",
  name: "viewport_horizontal_coverage",
  sendInPings: ["action", "page"],
  lifetime: "application",
  disabled: false,
});

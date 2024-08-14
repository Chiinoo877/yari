import { DEFAULT_LOCALE } from "../libs/constants/index.js";
import { Doc } from "../libs/types/document.js";

export function getPageDescription(
  doc: Partial<Doc>,
  pageType: string
): string | undefined {
  if (doc.locale === DEFAULT_LOCALE) {
    const sections = doc.toc?.map(({ text }) => text) ?? [];

    const items = Object.entries({
      Value: "its type",
      "Event type": "its type",
      Syntax: "its syntax",
      Parameters: "its parameters",
      Constructor: "its constructor",
      "Instance properties": "its properties",
      "Event properties": "its properties",
      "Instance methods": "its methods",
      "Return value": "its return value",
      Exceptions: "possible exceptions",
      Examples: "code examples",
      Specifications: "links to the current standard documents",
      "Browser compatibility": "browser compatibility",
    })
      .filter(([section]) => sections.includes(section))
      .map(([, text]) => text);

    const contents = enumerate(...items);

    switch (pageType) {
      case "web-api-instance-property":
      case "web-api-static-property":
        // "Learn about the Window.localStorage property, ..."
        // "Learn about the static Notification.permission property, ..."
        return `Learn about the ${doc.title.replace(/^(.*?): (.*?) (static )?property$/, "$3$1.$2 property")}, including ${contents}.`;

      case "web-api-instance-method":
      case "web-api-static-method":
        // "Learn about the EventTarget.addEventListener() method, ..."
        // "Learn about the static URL.createObjectURL() method, ..."
        return `Learn about the ${doc.title.replace(/^(.*?): (.*?) (static )?method$/, "$3$1.$2 method")}, including ${contents}.`;

      case "web-api-interface":
        // "Learn about the URLSearchParams interface, ..."
        return `Learn about the ${doc.title} interface, including ${contents}.`;

      case "web-api-event":
        // "Learn about the DOMContentLoaded event, ..."
        return `Learn about the ${doc.title.replace(/^.*?: /, "")}, including ${contents}.`;

      case "web-api-constructor":
        // "Learn about the URL() constructor, ..."
        return `Learn about the ${doc.title.replace(/^.*?: /, "")}, including ${contents}.`;

      case "web-api-global-function":
        // "Learn about the global setTimeout() function, ..."
        return `Learn about the ${doc.title.replace(/^(.*) global function$/, "global $1 function")}, including ${contents}.`;
    }
  }

  return doc.summary;
}

function enumerate(...items: string[]) {
  items = items.filter(Boolean);

  const lastItem = items.pop();

  return [items.join(", "), lastItem].filter(Boolean).join(", and ");
}

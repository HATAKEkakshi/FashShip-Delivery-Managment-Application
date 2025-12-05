var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: "/app.css" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/favicon[.]ico.ts
var favicon_ico_exports = {};
__export(favicon_ico_exports, {
  loader: () => loader
});
function loader() {
  return new Response(null, { status: 204 });
}

// app/routes/partner.login.tsx
var partner_login_exports = {};
__export(partner_login_exports, {
  default: () => PartnerLogin
});
import { Link } from "@remix-run/react";

// app/components/ui/button.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// app/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function getLatestStatus(shipment) {
  return shipment.timeline[shipment.timeline.length - 1].status;
}
function getShipmentsCountWithStatus(shipments, status) {
  return console.log(shipments), shipments.filter((shipment) => getLatestStatus(shipment) === status).length;
}

// app/components/ui/button.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = !1,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV3(
    asChild ? Slot : "button",
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/button.tsx",
      lineNumber: 51,
      columnNumber: 5
    },
    this
  );
}

// app/routes/partner.login.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function PartnerLogin() {
  return /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col items-center justify-center min-h-screen py-2", children: [
    /* @__PURE__ */ jsxDEV4("h1", { className: "text-4xl font-bold mb-8", children: "Partner Login" }, void 0, !1, {
      fileName: "app/routes/partner.login.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "w-full max-w-md space-y-4", children: [
      /* @__PURE__ */ jsxDEV4(
        "input",
        {
          type: "email",
          placeholder: "Email",
          className: "w-full p-3 border rounded-lg"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/partner.login.tsx",
          lineNumber: 9,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV4(
        "input",
        {
          type: "password",
          placeholder: "Password",
          className: "w-full p-3 border rounded-lg"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/partner.login.tsx",
          lineNumber: 14,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV4(Button, { className: "w-full", children: "Login" }, void 0, !1, {
        fileName: "app/routes/partner.login.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Button, { variant: "outline", className: "w-full", asChild: !0, children: /* @__PURE__ */ jsxDEV4(Link, { to: "/", children: "Back to Home" }, void 0, !1, {
        fileName: "app/routes/partner.login.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/partner.login.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/partner.login.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/partner.login.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/seller.login.tsx
var seller_login_exports = {};
__export(seller_login_exports, {
  default: () => SellerLogin
});
import { Link as Link2 } from "@remix-run/react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function SellerLogin() {
  return /* @__PURE__ */ jsxDEV5("div", { className: "flex flex-col items-center justify-center min-h-screen py-2", children: [
    /* @__PURE__ */ jsxDEV5("h1", { className: "text-4xl font-bold mb-8", children: "Seller Login" }, void 0, !1, {
      fileName: "app/routes/seller.login.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "w-full max-w-md space-y-4", children: [
      /* @__PURE__ */ jsxDEV5(
        "input",
        {
          type: "email",
          placeholder: "Email",
          className: "w-full p-3 border rounded-lg"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/seller.login.tsx",
          lineNumber: 9,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5(
        "input",
        {
          type: "password",
          placeholder: "Password",
          className: "w-full p-3 border rounded-lg"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/seller.login.tsx",
          lineNumber: 14,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5(Button, { className: "w-full", children: "Login" }, void 0, !1, {
        fileName: "app/routes/seller.login.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Button, { variant: "outline", className: "w-full", asChild: !0, children: /* @__PURE__ */ jsxDEV5(Link2, { to: "/", children: "Back to Home" }, void 0, !1, {
        fileName: "app/routes/seller.login.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/seller.login.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/seller.login.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/seller.login.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => DashboardPage
});
import { useQuery } from "@tanstack/react-query";
import { useContext as useContext4 } from "react";
import { Navigate } from "react-router";

// app/components/app-sidebar.tsx
import { Package } from "lucide-react";
import { useContext as useContext2 } from "react";

// app/components/ui/sidebar.tsx
import * as React2 from "react";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { cva as cva2 } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";

// app/hooks/use-mobile.ts
import * as React from "react";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  let [isMobile, setIsMobile] = React.useState(void 0);
  return React.useEffect(() => {
    let mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`), onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    return mql.addEventListener("change", onChange), setIsMobile(window.innerWidth < MOBILE_BREAKPOINT), () => mql.removeEventListener("change", onChange);
  }, []), !!isMobile;
}

// app/components/ui/input.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxDEV6(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/input.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}

// app/components/ui/separator.tsx
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function Separator({
  className,
  orientation = "horizontal",
  decorative = !0,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV7(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator-root",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/separator.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}

// app/components/ui/sheet.tsx
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsxDEV8(SheetPrimitive.Root, { "data-slot": "sheet", ...props }, void 0, !1, {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV8(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props }, void 0, !1, {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV8(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/sheet.tsx",
      lineNumber: 34,
      columnNumber: 5
    },
    this
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxDEV8(SheetPortal, { children: [
    /* @__PURE__ */ jsxDEV8(SheetOverlay, {}, void 0, !1, {
      fileName: "app/components/ui/sheet.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxDEV8(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsxDEV8(XIcon, { className: "size-4" }, void 0, !1, {
              fileName: "app/components/ui/sheet.tsx",
              lineNumber: 74,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV8("span", { className: "sr-only", children: "Close" }, void 0, !1, {
              fileName: "app/components/ui/sheet.tsx",
              lineNumber: 75,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ui/sheet.tsx",
            lineNumber: 73,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/ui/sheet.tsx",
        lineNumber: 56,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV8(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/sheet.tsx",
      lineNumber: 84,
      columnNumber: 5
    },
    this
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV8(
    SheetPrimitive.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/sheet.tsx",
      lineNumber: 107,
      columnNumber: 5
    },
    this
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV8(
    SheetPrimitive.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/sheet.tsx",
      lineNumber: 120,
      columnNumber: 5
    },
    this
  );
}

// app/components/ui/tooltip.tsx
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV9(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/tooltip.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
}
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV9(TooltipProvider, { children: /* @__PURE__ */ jsxDEV9(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }, void 0, !1, {
    fileName: "app/components/ui/tooltip.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/tooltip.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV9(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props }, void 0, !1, {
    fileName: "app/components/ui/tooltip.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV9(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV9(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxDEV9(TooltipPrimitive.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" }, void 0, !1, {
          fileName: "app/components/ui/tooltip.tsx",
          lineNumber: 55,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ui/tooltip.tsx",
      lineNumber: 45,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/ui/tooltip.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/components/ui/sidebar.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var SIDEBAR_COOKIE_NAME = "sidebar_state", SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7, SIDEBAR_WIDTH = "16rem", SIDEBAR_WIDTH_MOBILE = "18rem", SIDEBAR_WIDTH_ICON = "3rem", SIDEBAR_KEYBOARD_SHORTCUT = "b", SidebarContext = React2.createContext(null);
function useSidebar() {
  let context = React2.useContext(SidebarContext);
  if (!context)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return context;
}
function SidebarProvider({
  defaultOpen = !0,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}) {
  let isMobile = useIsMobile(), [openMobile, setOpenMobile] = React2.useState(!1), [_open, _setOpen] = React2.useState(defaultOpen), open = openProp ?? _open, setOpen = React2.useCallback(
    (value) => {
      let openState = typeof value == "function" ? value(open) : value;
      setOpenProp ? setOpenProp(openState) : _setOpen(openState), document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  ), toggleSidebar = React2.useCallback(() => isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2), [isMobile, setOpen, setOpenMobile]);
  React2.useEffect(() => {
    let handleKeyDown = (event) => {
      event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey) && (event.preventDefault(), toggleSidebar());
    };
    return window.addEventListener("keydown", handleKeyDown), () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  let state = open ? "expanded" : "collapsed", contextValue = React2.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );
  return /* @__PURE__ */ jsxDEV10(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxDEV10(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsxDEV10(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
        ...style
      },
      className: cn(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        className
      ),
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 130,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 129,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 128,
    columnNumber: 5
  }, this);
}
function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}) {
  let { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  return collapsible === "none" ? /* @__PURE__ */ jsxDEV10(
    "div",
    {
      "data-slot": "sidebar",
      className: cn(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        className
      ),
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 168,
      columnNumber: 7
    },
    this
  ) : isMobile ? /* @__PURE__ */ jsxDEV10(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsxDEV10(
    SheetContent,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": SIDEBAR_WIDTH_MOBILE
      },
      side,
      children: [
        /* @__PURE__ */ jsxDEV10(SheetHeader, { className: "sr-only", children: [
          /* @__PURE__ */ jsxDEV10(SheetTitle, { children: "Sidebar" }, void 0, !1, {
            fileName: "app/components/ui/sidebar.tsx",
            lineNumber: 197,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV10(SheetDescription, { children: "Displays the mobile sidebar." }, void 0, !1, {
            fileName: "app/components/ui/sidebar.tsx",
            lineNumber: 198,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ui/sidebar.tsx",
          lineNumber: 196,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "flex h-full w-full flex-col", children }, void 0, !1, {
          fileName: "app/components/ui/sidebar.tsx",
          lineNumber: 200,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 184,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 183,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV10(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ jsxDEV10(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: cn(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/ui/sidebar.tsx",
            lineNumber: 216,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV10(
          "div",
          {
            "data-slot": "sidebar-container",
            className: cn(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              className
            ),
            ...props,
            children: /* @__PURE__ */ jsxDEV10(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children
              },
              void 0,
              !1,
              {
                fileName: "app/components/ui/sidebar.tsx",
                lineNumber: 242,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/ui/sidebar.tsx",
            lineNumber: 227,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 207,
      columnNumber: 5
    },
    this
  );
}
function SidebarTrigger({
  className,
  onClick,
  ...props
}) {
  let { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxDEV10(
    Button,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: cn("size-7", className),
      onClick: (event) => {
        onClick?.(event), toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV10(PanelLeftIcon, {}, void 0, !1, {
          fileName: "app/components/ui/sidebar.tsx",
          lineNumber: 274,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV10("span", { className: "sr-only", children: "Toggle Sidebar" }, void 0, !1, {
          fileName: "app/components/ui/sidebar.tsx",
          lineNumber: 275,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 262,
      columnNumber: 5
    },
    this
  );
}
function SidebarInset({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV10(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: cn(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 307,
      columnNumber: 5
    },
    this
  );
}
function SidebarHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV10(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 335,
      columnNumber: 5
    },
    this
  );
}
function SidebarContent({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV10(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 371,
      columnNumber: 5
    },
    this
  );
}
function SidebarGroup({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV10(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 385,
      columnNumber: 5
    },
    this
  );
}
function SidebarMenu({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV10(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: cn("flex w-full min-w-0 flex-col gap-1", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 454,
      columnNumber: 5
    },
    this
  );
}
function SidebarMenuItem({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV10(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 465,
      columnNumber: 5
    },
    this
  );
}
var sidebarMenuButtonVariants = cva2(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function SidebarMenuButton({
  asChild = !1,
  isActive = !1,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}) {
  let Comp = asChild ? Slot2 : "button", { isMobile, state } = useSidebar(), button = /* @__PURE__ */ jsxDEV10(
    Comp,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(sidebarMenuButtonVariants({ variant, size }), className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 513,
      columnNumber: 5
    },
    this
  );
  return tooltip ? (typeof tooltip == "string" && (tooltip = {
    children: tooltip
  }), /* @__PURE__ */ jsxDEV10(Tooltip, { children: [
    /* @__PURE__ */ jsxDEV10(TooltipTrigger, { asChild: !0, children: button }, void 0, !1, {
      fileName: "app/components/ui/sidebar.tsx",
      lineNumber: 535,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10(
      TooltipContent,
      {
        side: "right",
        align: "center",
        hidden: state !== "collapsed" || isMobile,
        ...tooltip
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/sidebar.tsx",
        lineNumber: 536,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ui/sidebar.tsx",
    lineNumber: 534,
    columnNumber: 5
  }, this)) : button;
}

// app/contexts/AuthContext.tsx
import { createContext as createContext2, useEffect as useEffect3, useState as useState3 } from "react";
import { useNavigate } from "@remix-run/react";
import { toast } from "sonner";

// app/lib/client.ts
import axios from "axios";
var HttpClient = class {
  instance;
  securityData = null;
  securityWorker;
  secure;
  format;
  constructor({ securityWorker, secure, format, ...axiosConfig } = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" }), this.secure = secure, this.format = format, this.securityWorker = securityWorker;
  }
  setSecurityData = (data) => {
    this.securityData = data;
  };
  mergeRequestParams(params1, params2) {
    let method = params1.method || params2 && params2.method;
    return {
      ...this.instance.defaults,
      ...params1,
      ...params2 || {},
      headers: {
        ...method && this.instance.defaults.headers[method.toLowerCase()] || {},
        ...params1.headers || {},
        ...params2 && params2.headers || {}
      }
    };
  }
  stringifyFormItem(formItem) {
    return typeof formItem == "object" && formItem !== null ? JSON.stringify(formItem) : `${formItem}`;
  }
  createFormData(input) {
    return input instanceof FormData ? input : Object.keys(input || {}).reduce((formData, key) => {
      let property = input[key], propertyContent = property instanceof Array ? property : [property];
      for (let formItem of propertyContent) {
        let isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }
      return formData;
    }, new FormData());
  }
  request = async ({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }) => {
    let secureParams = (typeof secure == "boolean" ? secure : this.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {}, requestParams = this.mergeRequestParams(params, secureParams), responseFormat = format || this.format || void 0;
    return type === "multipart/form-data" /* FormData */ && body && body !== null && typeof body == "object" && (body = this.createFormData(body)), type === "text/plain" /* Text */ && body && body !== null && typeof body != "string" && (body = JSON.stringify(body)), this.instance.request({
      ...requestParams,
      headers: {
        ...requestParams.headers || {},
        ...type ? { "Content-Type": type } : {}
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path
    });
  };
}, Api = class extends HttpClient {
  shipment = {
    /**
     * No description
     *
     * @tags Shipment
     * @name GetShipment
     * @summary Get Shipment
     * @request GET:/shipment/
     */
    getShipment: (query, params = {}) => this.request({
      path: "/shipment/",
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Shipment
     * @name SubmitShipment
     * @summary Submit Shipment
     * @request POST:/shipment/
     * @secure
     */
    submitShipment: (data, params = {}) => this.request({
      path: "/shipment/",
      method: "POST",
      body: data,
      secure: !0,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Shipment
     * @name UpdateShipment
     * @summary Update Shipment
     * @request PATCH:/shipment/
     * @secure
     */
    updateShipment: (query, data, params = {}) => this.request({
      path: "/shipment/",
      method: "PATCH",
      query,
      body: data,
      secure: !0,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Shipment
     * @name AddTagToShipment
     * @summary Add Tag To Shipment
     * @request GET:/shipment/tag
     */
    addTagToShipment: (query, params = {}) => this.request({
      path: "/shipment/tag",
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Shipment
     * @name RemoveTagFromShipment
     * @summary Remove Tag From Shipment
     * @request DELETE:/shipment/tag
     */
    removeTagFromShipment: (query, params = {}) => this.request({
      path: "/shipment/tag",
      method: "DELETE",
      query,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Shipment
     * @name CancelShipment
     * @summary Cancel Shipment
     * @request GET:/shipment/cancel
     * @secure
     */
    cancelShipment: (query, params = {}) => this.request({
      path: "/shipment/cancel",
      method: "GET",
      query,
      secure: !0,
      format: "json",
      ...params
    })
  };
  seller = {
    /**
     * No description
     *
     * @tags Seller
     * @name RegisterSeller
     * @summary Register Seller
     * @request POST:/seller/signup
     */
    registerSeller: (data, params = {}) => this.request({
      path: "/seller/signup",
      method: "POST",
      body: data,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Seller
     * @name LoginSeller
     * @summary Login Seller
     * @request POST:/seller/token
     */
    loginSeller: (data, params = {}) => this.request({
      path: "/seller/token",
      method: "POST",
      body: data,
      type: "application/x-www-form-urlencoded" /* UrlEncoded */,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Seller
     * @name GetSellerProfile
     * @summary Get Seller Profile
     * @request GET:/seller/me
     * @secure
     */
    getSellerProfile: (params = {}) => this.request({
      path: "/seller/me",
      method: "GET",
      secure: !0,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Seller
     * @name GetShipments
     * @summary Get Shipments
     * @request GET:/seller/shipments
     * @secure
     */
    getShipments: (params = {}) => this.request({
      path: "/seller/shipments",
      method: "GET",
      secure: !0,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Seller
     * @name ForgotPassword
     * @summary Forgot Password
     * @request GET:/seller/forgot_password
     */
    forgotPassword: (query, params = {}) => this.request({
      path: "/seller/forgot_password",
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Seller
     * @name GetResetPasswordForm
     * @summary Get Reset Password Form
     * @request GET:/seller/reset_password_form
     */
    getResetPasswordForm: (query, params = {}) => this.request({
      path: "/seller/reset_password_form",
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Seller
     * @name ResetPassword
     * @summary Reset Password
     * @request POST:/seller/reset_password
     */
    resetPassword: (query, data, params = {}) => this.request({
      path: "/seller/reset_password",
      method: "POST",
      query,
      body: data,
      type: "application/x-www-form-urlencoded" /* UrlEncoded */,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Seller
     * @name LogoutSeller
     * @summary Logout Seller
     * @request GET:/seller/logout
     * @secure
     */
    logoutSeller: (params = {}) => this.request({
      path: "/seller/logout",
      method: "GET",
      secure: !0,
      format: "json",
      ...params
    })
  };
  partner = {
    /**
     * No description
     *
     * @tags Delivery Partner
     * @name RegisterDeliveryPartner
     * @summary Register Delivery Partner
     * @request POST:/partner/signup
     */
    registerDeliveryPartner: (data, params = {}) => this.request({
      path: "/partner/signup",
      method: "POST",
      body: data,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Delivery Partner
     * @name LoginDeliveryPartner
     * @summary Login Delivery Partner
     * @request POST:/partner/token
     */
    loginDeliveryPartner: (data, params = {}) => this.request({
      path: "/partner/token",
      method: "POST",
      body: data,
      type: "application/x-www-form-urlencoded" /* UrlEncoded */,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Delivery Partner
     * @name GetDeliveryPartnerProfile
     * @summary Get Delivery Partner Profile
     * @request GET:/partner/me
     * @secure
     */
    getDeliveryPartnerProfile: (params = {}) => this.request({
      path: "/partner/me",
      method: "GET",
      secure: !0,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Delivery Partner
     * @name GetShipments
     * @summary Get Shipments
     * @request GET:/partner/shipments
     * @secure
     */
    getShipments: (params = {}) => this.request({
      path: "/partner/shipments",
      method: "GET",
      secure: !0,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Delivery Partner
     * @name UpdateDeliveryPartner
     * @summary Update Delivery Partner
     * @request POST:/partner/
     * @secure
     */
    updateDeliveryPartner: (data, params = {}) => this.request({
      path: "/partner/",
      method: "POST",
      body: data,
      secure: !0,
      type: "application/json" /* Json */,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Delivery Partner
     * @name ForgotPassword
     * @summary Forgot Password
     * @request GET:/partner/forgot_password
     */
    forgotPassword: (query, params = {}) => this.request({
      path: "/partner/forgot_password",
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Delivery Partner
     * @name GetResetPasswordForm
     * @summary Get Reset Password Form
     * @request GET:/partner/reset_password_form
     */
    getResetPasswordForm: (query, params = {}) => this.request({
      path: "/partner/reset_password_form",
      method: "GET",
      query,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Delivery Partner
     * @name ResetPassword
     * @summary Reset Password
     * @request POST:/partner/reset_password
     */
    resetPassword: (query, data, params = {}) => this.request({
      path: "/partner/reset_password",
      method: "POST",
      query,
      body: data,
      type: "application/x-www-form-urlencoded" /* UrlEncoded */,
      format: "json",
      ...params
    }),
    /**
     * No description
     *
     * @tags Delivery Partner
     * @name LogoutDeliveryPartner
     * @summary Logout Delivery Partner
     * @request GET:/partner/logout
     * @secure
     */
    logoutDeliveryPartner: (params = {}) => this.request({
      path: "/partner/logout",
      method: "GET",
      secure: !0,
      format: "json",
      ...params
    })
  };
};

// app/lib/api.ts
var api = new Api({
  baseURL: "http://localhost:8000",
  securityWorker: (token) => token ? {
    headers: {
      Authorization: `Bearer ${token}`
    }
  } : {}
}), api_default = api;

// app/contexts/AuthContext.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var AuthContext = createContext2({
  login: async () => {
  },
  logout: () => {
  }
});

// app/components/app-sidebar.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function AppSidebar({ currentRoute, ...props }) {
  let { user } = useContext2(AuthContext);
  return /* @__PURE__ */ jsxDEV12(Sidebar, { variant: "floating", ...props, children: [
    /* @__PURE__ */ jsxDEV12(SidebarHeader, { children: /* @__PURE__ */ jsxDEV12(SidebarMenu, { children: /* @__PURE__ */ jsxDEV12(SidebarMenuItem, { children: /* @__PURE__ */ jsxDEV12(SidebarMenuButton, { size: "lg", asChild: !0, children: /* @__PURE__ */ jsxDEV12("a", { href: "#", children: [
      /* @__PURE__ */ jsxDEV12("div", { className: "flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground", children: /* @__PURE__ */ jsxDEV12(Package, { className: "size-4" }, void 0, !1, {
        fileName: "app/components/app-sidebar.tsx",
        lineNumber: 39,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/app-sidebar.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { className: "flex flex-col gap-0.5 leading-none", children: [
        /* @__PURE__ */ jsxDEV12("span", { className: "font-semibold", children: "FastShip" }, void 0, !1, {
          fileName: "app/components/app-sidebar.tsx",
          lineNumber: 42,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV12("span", { className: "", children: "DMS" }, void 0, !1, {
          fileName: "app/components/app-sidebar.tsx",
          lineNumber: 43,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/app-sidebar.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/app-sidebar.tsx",
      lineNumber: 37,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/app-sidebar.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/app-sidebar.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/app-sidebar.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/app-sidebar.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12(SidebarContent, { children: /* @__PURE__ */ jsxDEV12(SidebarGroup, { children: /* @__PURE__ */ jsxDEV12(SidebarMenu, { className: "gap-1", children: [
      [
        {
          title: "Dashboard",
          url: "/dashboard"
        },
        {
          title: "Account",
          url: "/account"
        }
      ].map((item) => /* @__PURE__ */ jsxDEV12(SidebarMenuItem, { children: /* @__PURE__ */ jsxDEV12(SidebarMenuButton, { asChild: !0, isActive: currentRoute === item.title, children: /* @__PURE__ */ jsxDEV12("a", { href: item.url, children: item.title }, void 0, !1, {
        fileName: "app/components/app-sidebar.tsx",
        lineNumber: 56,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/app-sidebar.tsx",
        lineNumber: 55,
        columnNumber: 17
      }, this) }, item.title, !1, {
        fileName: "app/components/app-sidebar.tsx",
        lineNumber: 54,
        columnNumber: 15
      }, this)),
      user === "seller" && /* @__PURE__ */ jsxDEV12(SidebarMenuItem, { children: /* @__PURE__ */ jsxDEV12(SidebarMenuButton, { asChild: !0, isActive: currentRoute === "Submit Shipment", children: /* @__PURE__ */ jsxDEV12("a", { href: "/submit-shipment", children: "Submit Shipment" }, void 0, !1, {
        fileName: "app/components/app-sidebar.tsx",
        lineNumber: 66,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/app-sidebar.tsx",
        lineNumber: 65,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/app-sidebar.tsx",
        lineNumber: 64,
        columnNumber: 17
      }, this),
      user === "partner" && /* @__PURE__ */ jsxDEV12(SidebarMenuItem, { children: /* @__PURE__ */ jsxDEV12(SidebarMenuButton, { asChild: !0, isActive: currentRoute === "Update Shipment", children: /* @__PURE__ */ jsxDEV12("a", { href: "/update-shipment", children: "Update Shipment" }, void 0, !1, {
        fileName: "app/components/app-sidebar.tsx",
        lineNumber: 77,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/app-sidebar.tsx",
        lineNumber: 76,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/app-sidebar.tsx",
        lineNumber: 75,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/app-sidebar.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/app-sidebar.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/app-sidebar.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/app-sidebar.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/components/shipment-card.tsx
import { ArrowUp, ChevronRight, ExternalLink, Package2 as Package22, PackageCheck, PackageX as PackageX2, Truck } from "lucide-react";

// app/components/ui/dialog.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon as XIcon2 } from "lucide-react";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV13(DialogPrimitive.Root, { "data-slot": "dialog", ...props }, void 0, !1, {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV13(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props }, void 0, !1, {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 16,
    columnNumber: 10
  }, this);
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxDEV13(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props }, void 0, !1, {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV13(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/dialog.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    this
  );
}
function DialogContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV13(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsxDEV13(DialogOverlay, {}, void 0, !1, {
      fileName: "app/components/ui/dialog.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxDEV13(DialogPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [
            /* @__PURE__ */ jsxDEV13(XIcon2, {}, void 0, !1, {
              fileName: "app/components/ui/dialog.tsx",
              lineNumber: 65,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV13("span", { className: "sr-only", children: "Close" }, void 0, !1, {
              fileName: "app/components/ui/dialog.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ui/dialog.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/ui/dialog.tsx",
        lineNumber: 55,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV13(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/dialog.tsx",
      lineNumber: 75,
      columnNumber: 5
    },
    this
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV13(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/dialog.tsx",
      lineNumber: 101,
      columnNumber: 5
    },
    this
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV13(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/dialog.tsx",
      lineNumber: 114,
      columnNumber: 5
    },
    this
  );
}

// app/components/ui/card.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV14(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/card.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV14(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/card.tsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV14(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/card.tsx",
      lineNumber: 66,
      columnNumber: 5
    },
    this
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV14(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/card.tsx",
      lineNumber: 76,
      columnNumber: 5
    },
    this
  );
}

// app/components/shipment-view.tsx
import { useQueryClient } from "@tanstack/react-query";
import { Edit3, Package as Package2, PackageX } from "lucide-react";
import { useContext as useContext3 } from "react";
import { useNavigate as useNavigate2 } from "@remix-run/react";

// app/components/ui/badge.tsx
import { Slot as Slot3 } from "@radix-ui/react-slot";
import { cva as cva3 } from "class-variance-authority";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var badgeVariants = cva3(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = !1,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV15(
    asChild ? Slot3 : "span",
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/badge.tsx",
      lineNumber: 38,
      columnNumber: 5
    },
    this
  );
}

// app/components/ui/table.tsx
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV16(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsxDEV16(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/table.tsx",
          lineNumber: 11,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/table.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV16(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/table.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV16(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/table.tsx",
      lineNumber: 32,
      columnNumber: 5
    },
    this
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV16(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/table.tsx",
      lineNumber: 55,
      columnNumber: 5
    },
    this
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV16(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/table.tsx",
      lineNumber: 68,
      columnNumber: 5
    },
    this
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV16(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/table.tsx",
      lineNumber: 81,
      columnNumber: 5
    },
    this
  );
}

// app/components/shipment-view.tsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
function ShipmentView({ shipment }) {
  let { user } = useContext3(AuthContext), queryClient = useQueryClient(), navigate = useNavigate2(), details = [
    {
      title: "Content",
      description: shipment.content
    },
    {
      title: "Weight",
      description: `${shipment.weight} kg`
    },
    {
      title: "Destination",
      description: shipment.destination
    },
    {
      title: "Estimated Delivery",
      description: shipment.estimated_delivery.split("T")[0]
    }
  ];
  return /* @__PURE__ */ jsxDEV17("div", { className: "flex flex-col gap-4 w-full max-w-[640px] relative", children: [
    /* @__PURE__ */ jsxDEV17("div", { className: "w-[80px] h-[80px] bg-gray-200 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxDEV17(Package2, { size: 40 }, void 0, !1, {
      fileName: "app/components/shipment-view.tsx",
      lineNumber: 47,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/shipment-view.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this),
    shipment.tags.length !== 0 && /* @__PURE__ */ jsxDEV17("div", { className: "flex gap-2", children: shipment.tags.map((tag, index) => /* @__PURE__ */ jsxDEV17(Badge, { variant: "secondary", children: tag.name }, index, !1, {
      fileName: "app/components/shipment-view.tsx",
      lineNumber: 53,
      columnNumber: 25
    }, this)) }, void 0, !1, {
      fileName: "app/components/shipment-view.tsx",
      lineNumber: 51,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV17("div", { className: "grid grid-cols-2 gap-4", children: details.map((item, index) => /* @__PURE__ */ jsxDEV17("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxDEV17("h4", { className: "text-sm text-muted-foreground", children: item.title }, void 0, !1, {
        fileName: "app/components/shipment-view.tsx",
        lineNumber: 60,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV17("p", { className: "text-l text-foreground font-medium", children: item.description }, void 0, !1, {
        fileName: "app/components/shipment-view.tsx",
        lineNumber: 61,
        columnNumber: 25
      }, this)
    ] }, index, !0, {
      fileName: "app/components/shipment-view.tsx",
      lineNumber: 59,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/components/shipment-view.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV17("h4", { className: "text-sm text-muted-foreground", children: "Order History" }, void 0, !1, {
      fileName: "app/components/shipment-view.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV17(Table, { className: "border rounded-l", children: [
      /* @__PURE__ */ jsxDEV17(TableHeader, { className: "bg-gray-100", children: /* @__PURE__ */ jsxDEV17(TableRow, { children: [
        /* @__PURE__ */ jsxDEV17(TableHead, { children: "Date" }, void 0, !1, {
          fileName: "app/components/shipment-view.tsx",
          lineNumber: 69,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV17(TableHead, { children: "Location" }, void 0, !1, {
          fileName: "app/components/shipment-view.tsx",
          lineNumber: 70,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV17(TableHead, { children: "Status" }, void 0, !1, {
          fileName: "app/components/shipment-view.tsx",
          lineNumber: 71,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV17(TableHead, { children: "Description" }, void 0, !1, {
          fileName: "app/components/shipment-view.tsx",
          lineNumber: 72,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/shipment-view.tsx",
        lineNumber: 68,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/shipment-view.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV17(TableBody, { children: shipment.timeline.map((item, index) => /* @__PURE__ */ jsxDEV17(TableRow, { children: [
        /* @__PURE__ */ jsxDEV17(TableCell, { children: `${item.created_at.split("T")[0]} ${item.created_at.split("T")[1].slice(0, 5)}` }, void 0, !1, {
          fileName: "app/components/shipment-view.tsx",
          lineNumber: 78,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV17(TableCell, { children: item.location }, void 0, !1, {
          fileName: "app/components/shipment-view.tsx",
          lineNumber: 81,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV17(TableCell, { children: item.status }, void 0, !1, {
          fileName: "app/components/shipment-view.tsx",
          lineNumber: 82,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV17(TableCell, { children: item.description }, void 0, !1, {
          fileName: "app/components/shipment-view.tsx",
          lineNumber: 83,
          columnNumber: 29
        }, this)
      ] }, index, !0, {
        fileName: "app/components/shipment-view.tsx",
        lineNumber: 77,
        columnNumber: 25
      }, this)) }, void 0, !1, {
        fileName: "app/components/shipment-view.tsx",
        lineNumber: 75,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/shipment-view.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV17("div", { className: "flex gap-4 justify-end", children: [
      user === "seller" && /* @__PURE__ */ jsxDEV17(Button, { variant: "outline", children: [
        /* @__PURE__ */ jsxDEV17(PackageX, {}, void 0, !1, {
          fileName: "app/components/shipment-view.tsx",
          lineNumber: 92,
          columnNumber: 25
        }, this),
        "Cancel Shipment"
      ] }, void 0, !0, {
        fileName: "app/components/shipment-view.tsx",
        lineNumber: 91,
        columnNumber: 21
      }, this),
      user === "partner" && /* @__PURE__ */ jsxDEV17(Button, { onClick: () => {
        navigate({
          pathname: "/update-shipment",
          search: `?id=${shipment.id}`
        });
      }, children: [
        /* @__PURE__ */ jsxDEV17(Edit3, {}, void 0, !1, {
          fileName: "app/components/shipment-view.tsx",
          lineNumber: 105,
          columnNumber: 25
        }, this),
        "Update Shipment Status"
      ] }, void 0, !0, {
        fileName: "app/components/shipment-view.tsx",
        lineNumber: 99,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/shipment-view.tsx",
      lineNumber: 88,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/shipment-view.tsx",
    lineNumber: 45,
    columnNumber: 9
  }, this);
}

// app/components/shipment-card.tsx
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var statusColors = {
  placed: {
    bgColor: "bg-blue-500",
    outlineColor: "outline-blue-500"
  },
  in_transit: {
    bgColor: "bg-orange-500",
    outlineColor: "outline-orange-500"
  },
  out_for_delivery: {
    bgColor: "bg-lime-500",
    outlineColor: "outline-lime-500"
  },
  delivered: {
    bgColor: "bg-green-400",
    outlineColor: "outline-green-400"
  },
  cancelled: {
    bgColor: "bg-grey-600",
    outlineColor: "outline-grey-600"
  }
}, statusIcons = {
  placed: /* @__PURE__ */ jsxDEV18(ArrowUp, { className: "size-5 text-primary-foreground" }, void 0, !1, {
    fileName: "app/components/shipment-card.tsx",
    lineNumber: 39,
    columnNumber: 13
  }, this),
  in_transit: /* @__PURE__ */ jsxDEV18(Truck, { className: "size-5 text-primary-foreground" }, void 0, !1, {
    fileName: "app/components/shipment-card.tsx",
    lineNumber: 40,
    columnNumber: 17
  }, this),
  out_for_delivery: /* @__PURE__ */ jsxDEV18(ExternalLink, { className: "size-5 text-primary-foreground" }, void 0, !1, {
    fileName: "app/components/shipment-card.tsx",
    lineNumber: 41,
    columnNumber: 23
  }, this),
  delivered: /* @__PURE__ */ jsxDEV18(PackageCheck, { className: "size-5 text-primary-foreground" }, void 0, !1, {
    fileName: "app/components/shipment-card.tsx",
    lineNumber: 42,
    columnNumber: 16
  }, this),
  cancelled: /* @__PURE__ */ jsxDEV18(PackageX2, { className: "size-5 text-primary-foreground" }, void 0, !1, {
    fileName: "app/components/shipment-card.tsx",
    lineNumber: 43,
    columnNumber: 16
  }, this)
};
function ShipmentCard({ shipment }) {
  let latestEvent = shipment.timeline[shipment.timeline.length - 1], latestStatus = latestEvent.status, statusColor = statusColors[latestStatus];
  return /* @__PURE__ */ jsxDEV18(Card, { className: "shadow-none", children: [
    /* @__PURE__ */ jsxDEV18(CardHeader, { children: /* @__PURE__ */ jsxDEV18("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ jsxDEV18("div", { className: "bg-secondary text-foreground flex size-16 items-center justify-center rounded-xl", children: /* @__PURE__ */ jsxDEV18(Package22, { className: "size-8" }, void 0, !1, {
        fileName: "app/components/shipment-card.tsx",
        lineNumber: 56,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/shipment-card.tsx",
        lineNumber: 55,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { children: [
        /* @__PURE__ */ jsxDEV18("p", { className: "text-gray-500", children: "Shipment Number" }, void 0, !1, {
          fileName: "app/components/shipment-card.tsx",
          lineNumber: 59,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV18("p", { className: "font-l font-medium", children: shipment.id.slice(-10) }, void 0, !1, {
          fileName: "app/components/shipment-card.tsx",
          lineNumber: 60,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/shipment-card.tsx",
        lineNumber: 58,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/shipment-card.tsx",
      lineNumber: 54,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/shipment-card.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV18(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ jsxDEV18("div", { className: "flex items-center space-x-4 rounded-xl p-[15px] bg-gray-100 relative", children: [
      /* @__PURE__ */ jsxDEV18("div", { className: "absolute left-[80px] top-0 bottom-0 w-0.5 bg-gray-300" }, void 0, !1, {
        fileName: "app/components/shipment-card.tsx",
        lineNumber: 66,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { "data-line": !0, className: `absolute left-[80px] top-[24px] bottom-0 w-0.5 ${statusColor.bgColor}` }, void 0, !1, {
        fileName: "app/components/shipment-card.tsx",
        lineNumber: 67,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "flex flex-col space-y-6 relative", children: [
        /* @__PURE__ */ jsxDEV18(TimelineEvent, { hasOutline: !0, event: latestEvent, bgColor: statusColor.bgColor, outlineColor: statusColor.outlineColor }, void 0, !1, {
          fileName: "app/components/shipment-card.tsx",
          lineNumber: 69,
          columnNumber: 25
        }, this),
        shipment.timeline.length > 1 && /* @__PURE__ */ jsxDEV18(
          TimelineEvent,
          {
            event: shipment.timeline[shipment.timeline.length - 2],
            bgColor: statusColor.bgColor,
            outlineColor: statusColor.bgColor
          },
          void 0,
          !1,
          {
            fileName: "app/components/shipment-card.tsx",
            lineNumber: 72,
            columnNumber: 29
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/shipment-card.tsx",
        lineNumber: 68,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/shipment-card.tsx",
      lineNumber: 65,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/shipment-card.tsx",
      lineNumber: 64,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV18(CardFooter, { children: /* @__PURE__ */ jsxDEV18(Dialog, { children: [
      /* @__PURE__ */ jsxDEV18(DialogTrigger, { className: "w-full", children: /* @__PURE__ */ jsxDEV18(Button, { className: "w-full", children: [
        "View Details ",
        /* @__PURE__ */ jsxDEV18(ChevronRight, {}, void 0, !1, {
          fileName: "app/components/shipment-card.tsx",
          lineNumber: 84,
          columnNumber: 42
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/shipment-card.tsx",
        lineNumber: 83,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/shipment-card.tsx",
        lineNumber: 82,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV18(DialogContent, { className: "sm:max-w-[640px]", children: /* @__PURE__ */ jsxDEV18(DialogHeader, { children: [
        /* @__PURE__ */ jsxDEV18(DialogTitle, { children: `Shipment #${shipment.id}` }, void 0, !1, {
          fileName: "app/components/shipment-card.tsx",
          lineNumber: 89,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV18(DialogDescription, { children: /* @__PURE__ */ jsxDEV18(ShipmentView, { shipment }, void 0, !1, {
          fileName: "app/components/shipment-card.tsx",
          lineNumber: 91,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/components/shipment-card.tsx",
          lineNumber: 90,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/shipment-card.tsx",
        lineNumber: 88,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/shipment-card.tsx",
        lineNumber: 87,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/shipment-card.tsx",
      lineNumber: 81,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/shipment-card.tsx",
      lineNumber: 80,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/shipment-card.tsx",
    lineNumber: 52,
    columnNumber: 9
  }, this);
}
function TimelineEvent({ event, bgColor, outlineColor, hasOutline = !1 }) {
  return /* @__PURE__ */ jsxDEV18("div", { className: "flex items-center gap-x-[15px]", children: [
    /* @__PURE__ */ jsxDEV18("p", { className: "text-xs text-muted-foreground w-[30px]", children: event.created_at.split("T")[1].slice(0, 5) }, void 0, !1, {
      fileName: "app/components/shipment-card.tsx",
      lineNumber: 104,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: `w-[40px] h-[40px] ${bgColor} text-foreground flex items-center justify-center rounded-full ${hasOutline ? `outline-2 ${outlineColor} outline-offset-2` : ""}`, children: statusIcons[event.status] }, void 0, !1, {
      fileName: "app/components/shipment-card.tsx",
      lineNumber: 107,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV18("p", { className: "text-sm text-gray-800", children: event.description }, void 0, !1, {
      fileName: "app/components/shipment-card.tsx",
      lineNumber: 110,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/shipment-card.tsx",
    lineNumber: 103,
    columnNumber: 9
  }, this);
}

// app/components/ui/loading.tsx
import { RotateCw } from "lucide-react";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
function Loading() {
  return /* @__PURE__ */ jsxDEV19("div", { className: "flex h-[100vh] items-center justify-center", children: /* @__PURE__ */ jsxDEV19("div", { className: "flex gap-4 items-center", children: [
    /* @__PURE__ */ jsxDEV19(RotateCw, { className: "text-muted-foreground animate-spin" }, void 0, !1, {
      fileName: "app/components/ui/loading.tsx",
      lineNumber: 7,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV19("h1", { className: "text-2xl font-bold text-muted-foreground", children: "Loading..." }, void 0, !1, {
      fileName: "app/components/ui/loading.tsx",
      lineNumber: 8,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/loading.tsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/loading.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard.tsx
import { Fragment, jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function DashboardPage() {
  let { token, user } = useContext4(AuthContext);
  if (!token)
    return /* @__PURE__ */ jsxDEV20(Navigate, { to: "/" }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 22,
      columnNumber: 12
    }, this);
  let { isLoading, isError, data } = useQuery({
    queryKey: ["shipments"],
    queryFn: async () => {
      let userApi = user === "seller" ? api_default.seller : api_default.partner, { data: data2 } = await userApi.getShipments();
      return data2;
    }
  });
  return isError ? /* @__PURE__ */ jsxDEV20("div", { className: "flex h-screen items-center justify-center", children: /* @__PURE__ */ jsxDEV20("h1", { className: "text-2xl font-bold", children: "Error loading shipments" }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 37,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV20(
    SidebarProvider,
    {
      style: {
        "--sidebar-width": "19rem"
      },
      children: [
        /* @__PURE__ */ jsxDEV20(AppSidebar, { currentRoute: "Dashboard" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 50,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV20(SidebarInset, { children: [
          /* @__PURE__ */ jsxDEV20("header", { className: "flex h-16 shrink-0 items-center gap-2 px-4", children: [
            /* @__PURE__ */ jsxDEV20(SidebarTrigger, { className: "-ml-1" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV20(
              Separator,
              {
                orientation: "vertical",
                className: "mr-2 data-[orientation=vertical]:h-4"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 54,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV20("h2", { children: "Dashboard" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV20("div", { className: "flex flex-1 flex-col gap-4 p-4 pt-0", children: isLoading || !data ? /* @__PURE__ */ jsxDEV20(Loading, {}, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 62,
            columnNumber: 34
          }, this) : /* @__PURE__ */ jsxDEV20(Fragment, { children: [
            /* @__PURE__ */ jsxDEV20("div", { className: "grid auto-rows-min gap-4 md:grid-cols-4", children: [
              /* @__PURE__ */ jsxDEV20(NumberLabel, { value: data.length, label: "Total Shipments" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 65,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV20(NumberLabel, { value: getShipmentsCountWithStatus(data, "placed" /* Placed */), label: "Placed" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 66,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV20(NumberLabel, { value: getShipmentsCountWithStatus(data, "in_transit" /* InTransit */), label: "In Transit" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 67,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV20(NumberLabel, { value: getShipmentsCountWithStatus(data, "delivered" /* Delivered */), label: "Delivered" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 68,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 64,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV20("div", { className: "grid auto-rows-min gap-4 md:grid-cols-4", children: data.map((shipment) => /* @__PURE__ */ jsxDEV20(ShipmentCard, { shipment }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 73,
              columnNumber: 23
            }, this)) }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 70,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 43,
      columnNumber: 5
    },
    this
  );
}
function NumberLabel({ value, label }) {
  return /* @__PURE__ */ jsxDEV20("div", { className: "flex flex-col gap-2 rounded-xl border border-gray-200 p-4", children: [
    /* @__PURE__ */ jsxDEV20("h1", { className: "text-4xl font-bold", children: value }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20("p", { className: "text-gray-500", children: label }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}

// app/routes/account.tsx
var account_exports = {};
__export(account_exports, {
  default: () => AccountPage
});
import { useQuery as useQuery2 } from "@tanstack/react-query";
import { useContext as useContext5 } from "react";
import { Navigate as Navigate2 } from "react-router";

// app/components/ui/label.tsx
import * as LabelPrimitive from "@radix-ui/react-label";
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV21(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/label.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}

// app/routes/account.tsx
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
function AccountPage() {
  let { token, user, logout } = useContext5(AuthContext);
  if (!token)
    return /* @__PURE__ */ jsxDEV22(Navigate2, { to: "/" }, void 0, !1, {
      fileName: "app/routes/account.tsx",
      lineNumber: 22,
      columnNumber: 12
    }, this);
  let { isLoading, isError, data } = useQuery2({
    queryKey: ["account"],
    queryFn: async () => {
      let getUserProfile = user === "seller" ? api_default.seller.getSellerProfile : api_default.partner.getDeliveryPartnerProfile, { data: data2 } = await getUserProfile();
      return data2;
    }
  });
  return isError ? /* @__PURE__ */ jsxDEV22("div", { className: "flex h-screen items-center justify-center", children: /* @__PURE__ */ jsxDEV22("h1", { className: "text-2xl font-bold", children: "Error loading account details" }, void 0, !1, {
    fileName: "app/routes/account.tsx",
    lineNumber: 37,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/account.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV22(
    SidebarProvider,
    {
      style: {
        "--sidebar-width": "19rem"
      },
      children: [
        /* @__PURE__ */ jsxDEV22(AppSidebar, { currentRoute: "Account" }, void 0, !1, {
          fileName: "app/routes/account.tsx",
          lineNumber: 50,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV22(SidebarInset, { children: [
          /* @__PURE__ */ jsxDEV22("header", { className: "flex h-16 shrink-0 items-center gap-2 px-4", children: [
            /* @__PURE__ */ jsxDEV22(SidebarTrigger, { className: "-ml-1" }, void 0, !1, {
              fileName: "app/routes/account.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV22(
              Separator,
              {
                orientation: "vertical",
                className: "mr-2 data-[orientation=vertical]:h-4"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/account.tsx",
                lineNumber: 54,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV22("h2", { children: "Account" }, void 0, !1, {
              fileName: "app/routes/account.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/account.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV22("div", { className: "flex flex-1 flex-col gap-4 p-4 pt-0", children: isLoading ? /* @__PURE__ */ jsxDEV22(Loading, {}, void 0, !1, {
            fileName: "app/routes/account.tsx",
            lineNumber: 62,
            columnNumber: 25
          }, this) : /* @__PURE__ */ jsxDEV22("div", { className: "flex flex-col gap-4 max-w-[400px]", children: [
            /* @__PURE__ */ jsxDEV22(Label, { htmlFor: "name", children: "Name" }, void 0, !1, {
              fileName: "app/routes/account.tsx",
              lineNumber: 64,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV22(Input, { id: "name", value: data?.name ?? "...", readOnly: !0 }, void 0, !1, {
              fileName: "app/routes/account.tsx",
              lineNumber: 65,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV22(Label, { htmlFor: "email", children: "Email" }, void 0, !1, {
              fileName: "app/routes/account.tsx",
              lineNumber: 66,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV22(Input, { id: "email", value: data?.email ?? "...", readOnly: !0 }, void 0, !1, {
              fileName: "app/routes/account.tsx",
              lineNumber: 67,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV22(Button, { className: "w-min ml-auto", onClick: logout, children: "Log Out" }, void 0, !1, {
              fileName: "app/routes/account.tsx",
              lineNumber: 68,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/account.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/account.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/account.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/account.tsx",
      lineNumber: 43,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { Link as Link3 } from "@remix-run/react";
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
function Index() {
  return /* @__PURE__ */ jsxDEV23("div", { className: "flex flex-col items-center justify-center min-h-screen py-2", children: [
    /* @__PURE__ */ jsxDEV23("h1", { className: "text-6xl font-bold", children: "Welcome to FastShip" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV23("p", { className: "mt-3 text-2xl mb-4", children: "Start your journey with us right now!" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV23(Button, { className: "mt-5", asChild: !0, children: /* @__PURE__ */ jsxDEV23(Link3, { to: "/seller/login", children: "Seller Login" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV23(Button, { className: "mt-5", asChild: !0, children: /* @__PURE__ */ jsxDEV23(Link3, { to: "/partner/login", children: "Partner Login" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-RBU555F6.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-ZZTJWY6Z.js", "/build/_shared/chunk-6UON2PKN.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SNXYKGEB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-VLALZBFF.js", imports: ["/build/_shared/chunk-TYFEVAVM.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account": { id: "routes/account", parentId: "root", path: "account", index: void 0, caseSensitive: void 0, module: "/build/routes/account-FKSPFKOC.js", imports: ["/build/_shared/chunk-W2N4CNAQ.js", "/build/_shared/chunk-TYFEVAVM.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-GA7JKUBV.js", imports: ["/build/_shared/chunk-W2N4CNAQ.js", "/build/_shared/chunk-TYFEVAVM.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/favicon[.]ico": { id: "routes/favicon[.]ico", parentId: "root", path: "favicon.ico", index: void 0, caseSensitive: void 0, module: "/build/routes/favicon[.]ico-X47YHDV2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/partner.login": { id: "routes/partner.login", parentId: "root", path: "partner/login", index: void 0, caseSensitive: void 0, module: "/build/routes/partner.login-ONJNM7U2.js", imports: ["/build/_shared/chunk-TYFEVAVM.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/seller.login": { id: "routes/seller.login", parentId: "root", path: "seller/login", index: void 0, caseSensitive: void 0, module: "/build/routes/seller.login-GMP4BA4Z.js", imports: ["/build/_shared/chunk-TYFEVAVM.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "6b961329", hmr: { runtime: "/build/_shared/chunk-6UON2PKN.js", timestamp: 1764955366561 }, url: "/build/manifest-6B961329.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/favicon[.]ico": {
    id: "routes/favicon[.]ico",
    parentId: "root",
    path: "favicon.ico",
    index: void 0,
    caseSensitive: void 0,
    module: favicon_ico_exports
  },
  "routes/partner.login": {
    id: "routes/partner.login",
    parentId: "root",
    path: "partner/login",
    index: void 0,
    caseSensitive: void 0,
    module: partner_login_exports
  },
  "routes/seller.login": {
    id: "routes/seller.login",
    parentId: "root",
    path: "seller/login",
    index: void 0,
    caseSensitive: void 0,
    module: seller_login_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/account": {
    id: "routes/account",
    parentId: "root",
    path: "account",
    index: void 0,
    caseSensitive: void 0,
    module: account_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map

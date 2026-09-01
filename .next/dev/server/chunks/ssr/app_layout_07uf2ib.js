module.exports = [
"[project]/app/layout.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata,
    "viewport",
    ()=>viewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.praxy.com.br";
const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Praxy | Automação e agentes de IA para sua operação",
        template: "%s | Praxy"
    },
    description: "A Praxy identifica gargalos operacionais e constrói agentes de IA, automações, sistemas e sites para sua empresa operar melhor.",
    applicationName: "Praxy",
    authors: [
        {
            name: "Praxy"
        }
    ],
    creator: "Praxy",
    publisher: "Praxy",
    category: "technology",
    alternates: {
        canonical: "/"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-video-preview": -1,
            "max-snippet": -1
        }
    },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: siteUrl,
        siteName: "Praxy",
        title: "Praxy | Automação e agentes de IA para sua operação",
        description: "Identifique gargalos operacionais e construa agentes de IA, automações e sistemas para sua empresa operar melhor."
    },
    twitter: {
        card: "summary_large_image",
        title: "Praxy | Automação e agentes de IA para sua operação",
        description: "Identifique gargalos operacionais e construa agentes de IA, automações e sistemas para sua empresa operar melhor."
    }
};
const viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: "#050505"
};
function RootLayout({ children }) {
    const scrollResetScript = `try{if("scrollRestoration"in history)history.scrollRestoration="manual";if(!location.hash)scrollTo(0,0)}catch(e){}`;
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": `${siteUrl}/#organization`,
                name: "Praxy",
                url: siteUrl,
                logo: `${siteUrl}/praxy-logo-commpleta-navbar.svg`,
                description: "Agentes de IA, automações, sistemas e sites para operações empresariais."
            },
            {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                name: "Praxy",
                url: siteUrl,
                description: "Automação e agentes de IA para sua operação.",
                inLanguage: "pt-BR",
                publisher: {
                    "@id": `${siteUrl}/#organization`
                }
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "pt-BR",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    dangerouslySetInnerHTML: {
                        __html: scrollResetScript
                    }
                }, void 0, false, {
                    fileName: "[project]/app/layout.js",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c")
                    }
                }, void 0, false, {
                    fileName: "[project]/app/layout.js",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/layout.js",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/layout.js",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=app_layout_07uf2ib.js.map
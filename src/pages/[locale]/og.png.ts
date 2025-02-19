import type { APIRoute } from "astro"

import { getI18N } from "@/i18n"
import { responseToDataUrl } from "@/lib/utils"
import { ImageResponse } from "@vercel/og"

export async function getStaticPaths() {
  return [{ params: { locale: "es" } }, { params: { locale: "gl" } }, { params: { locale: "en" } }]
}

export const GET: APIRoute = async ({ params, request }) => {
  const currentLocale = params.locale || "es"
  const i18n = getI18N({ currentLocale })

  const [logoUrl, backgroundUrl, SoraRegular, SoraExtraBold] = await Promise.all([
    fetch(new URL("/images/logo.png", request.url)).then(responseToDataUrl),
    fetch(new URL("/images/grainy.png", request.url)).then(responseToDataUrl),
    fetch("https://api.fontsource.org/v1/fonts/sora/latin-400-normal.ttf").then((res) =>
      res.arrayBuffer(),
    ),
    fetch("https://api.fontsource.org/v1/fonts/sora/latin-800-normal.ttf").then((res) =>
      res.arrayBuffer(),
    ),
  ])

  const html = {
    type: "div",
    props: {
      tw: "w-full h-full flex items-center justify-center relative text-[#333]",
      style: {
        fontFamily: "Sora Regular",
        background: "#dddad2",
        backgroundImage: `url(${backgroundUrl})`,
      },
      children: [
        {
          type: "img",
          props: {
            src: logoUrl,
            width: 300,
            height: 300,
          },
        },
        {
          type: "div",
          props: {
            tw: "pl-10 flex",
            children: [
              {
                type: "div",
                props: {
                  tw: "flex flex-col",
                  children: [
                    {
                      type: "div",
                      props: {
                        tw: "flex",
                        children: [
                          {
                            type: "div",
                            props: {
                              tw: "flex pr-2",
                              style: {
                                fontSize: "2.5rem",
                                lineHeight: "3rem",
                                letterSpacing: "-0.025em",
                              },
                              children: i18n.OPEN_GRAPH.TEXT_1,
                            },
                          },
                          {
                            type: "div",
                            props: {
                              tw: "flex",
                              style: {
                                fontSize: "2.5rem",
                                lineHeight: "3rem",
                                letterSpacing: "-0.025em",
                                fontFamily: "Sora Extra Bold",
                              },
                              children: "Diego",
                            },
                          },
                        ],
                      },
                    },
                    {
                      type: "div",
                      props: {
                        tw: "flex",
                        children: [
                          {
                            type: "div",
                            props: {
                              tw: "flex pr-2",
                              style: {
                                fontSize: "2.5rem",
                                lineHeight: "3rem",
                                letterSpacing: "-0.025em",
                                fontFamily: "Sora Extra Bold",
                              },
                              children: i18n.OPEN_GRAPH.TEXT_2,
                            },
                          },
                        ],
                      },
                    },
                    {
                      type: "div",
                      props: {
                        tw: "flex",
                        children: [
                          {
                            type: "div",
                            props: {
                              tw: "flex pr-2",
                              style: {
                                fontSize: "2.5rem",
                                lineHeight: "3rem",
                                letterSpacing: "-0.025em",
                              },
                              children: i18n.OPEN_GRAPH.TEXT_3,
                            },
                          },
                          {
                            type: "div",
                            props: {
                              tw: "flex",
                              style: {
                                fontSize: "2.5rem",
                                lineHeight: "3rem",
                                letterSpacing: "-0.025em",
                                fontFamily: "Sora Extra Bold",
                              },
                              children: i18n.OPEN_GRAPH.TEXT_4,
                            },
                          },
                          {
                            type: "div",
                            props: {
                              tw: "flex",
                              style: {
                                fontSize: "2.5rem",
                                lineHeight: "3rem",
                                letterSpacing: "-0.025em",
                              },
                              children: ".",
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            tw: "absolute bottom-[40px] right-[40px] flex items-center",
            style: {
              fontSize: "2rem",
              lineHeight: "2.5rem",
              letterSpacing: "-0.025em",
            },
            children: i18n.OPEN_GRAPH.FOOTNOTE,
          },
        },
      ],
    },
  }

  return new ImageResponse(html, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Sora Regular",
        data: SoraRegular,
        style: "normal",
      },
      {
        name: "Sora Extra Bold",
        data: SoraExtraBold,
        style: "normal",
      },
    ],
  })
}

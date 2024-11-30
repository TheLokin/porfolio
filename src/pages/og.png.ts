import fs from "fs"
import path from "path"

import { ImageResponse } from "@vercel/og"

export async function GET() {
  const logo = fs.readFileSync(path.resolve("public/images/logo.png"))
  const background = fs.readFileSync(path.resolve("public/images/concrete.png"))
  const [SoraRegular, SoraExtraBold] = await Promise.all([
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
      tw: "w-full h-full flex items-center justify-center relative px-22 text-[#333]",
      style: {
        fontFamily: "Sora Regular",
        background: "#ddd",
        backgroundImage: `url('data:image/png;base64,${background.toString("base64")}')`,
      },
      children: [
        {
          type: "img",
          props: {
            src: `data:image/png;base64,${logo.toString("base64")}`,
            width: 300,
            height: 300,
          },
        },
        {
          type: "div",
          props: {
            tw: "pl-10 shrink flex",
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
                              children: "Hola, soy",
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
                              children: "Desarrollador",
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
                              children: "Frontend",
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
                              children: "Ubicado en",
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
                              children: "España",
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
            children: "TheLokin | Porfolio",
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

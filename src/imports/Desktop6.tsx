import svgPaths from "./svg-jmiin0aj8u";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValueEvent } from "motion/react";
import { ArrowUp } from "lucide-react";
import imgCLogoBg from "figma:asset/706df61bb570644c4d4424152d6e4dba301fe2fc.png";
import imgHeroMonkey from "figma:asset/fd2931788792859ae9abdb38dba933ad779cc8fb.png";
import imgAsset101 from "figma:asset/f8128c57025ddbaa59b269bb59d872ec6e4a7ac0.png";
import imgHeroBg from "figma:asset/a0d1a60520e2cf016349c6c5bbe84c70cb468afe.png";
import imgImage5 from "figma:asset/0c98910ab528c04ef163f3f44c7caa25b239ebc7.png";
import imgImage6 from "figma:asset/0349e9287e4fad5d3270ae5d84a69e6372674511.png";
import imgImage7 from "figma:asset/abc59b46cfc18ea3c1e423aa3dbcc3da5c44e4d1.png";
import imgImage8 from "figma:asset/409e3878b4febe91f8e528b06c8c599ed0c6aadf.png";
import imgIntentionMonkey from "figma:asset/dcb4ed66d94c8bc60fbf2e1caa9e90e03ac38e3e.png";
import imgFrame30 from "figma:asset/8855b101e9fd48d47dd742b2ea3f18609bd4b4c0.png";
import imgFrame31 from "figma:asset/fa0f06ddb358ed76caf0f700b0889e97b842a26e.png";
import imgFrame32 from "figma:asset/b9353653a3270dc29cc5fab11c23ba81feecf77d.png";
import imgFrame33 from "figma:asset/9c40f657e2672b8729a66efb08ce28d073b33a2b.png";
import imgFrame34 from "figma:asset/45aab52c3a4dc45f43259c736adba5c34f6193d8.png";
import imgFrame35 from "figma:asset/4741634d62bcc8efb6d523433eafbb6606612be4.png";
import imgFrame36 from "figma:asset/ada34c32313b6025e9d57b2df870c7a6aef83ef4.png";
import imgFrame37 from "figma:asset/2ac60486a63e76b463dddfdb271df475c7a9f440.png";
import img53 from "figma:asset/d2d476e3d14bf0e2d06a5c3e76d7908ce247e458.png";
import imgUnderlineAccent from "figma:asset/f9b53a99cecafb68614f538bcf0b7616ab850b68.png";
import imgBrandIdentity from "figma:asset/8c0f4c2b3f987df6649d4de05404e2ac63e4a11b.png";
import imgUIUX from "figma:asset/cb2c0c6c88f3d0e587e8719e20b80cd1e7dafcad.png";
import imgCreativeDesign from "figma:asset/ea64426fb52bcad19d30d5a1a741d17e2e2f0bd2.png";
import imgPitchDeck from "figma:asset/62d23b3d63171837a9a7a8ec2a614076795e49d8.png";
import imgWhatWeDoBackground from "figma:asset/b578b437b831946edf04cae069df0ea8c3f92ffe.png";
import { img52 } from "./svg-f322f";
import { ImprovedStorySection } from "../components/ImprovedStorySection";
import { IntentionSection } from "../components/IntentionSection";
import { ElegantDivider } from "../components/ElegantDivider";
import { QuoteSection } from "../components/QuoteSection";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Rectangle3 from "./Rectangle3";

function IconBackgroundImage() {
  return (
    <div className="relative shrink-0 size-[42px]">
      <div className="absolute inset-[-2.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <g id="Icon">
            <path d={svgPaths.pf1790f0} id="Icon_2" stroke="var(--stroke-0, #352D2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("flex-none w-full", additionalClassNames)}>
      <p className="capitalize font-['Arimo',sans-serif] font-light h-[25px] leading-[1.5] not-italic relative text-[#d4d4d4] text-[12px] tracking-[0.48px] w-full">{text}</p>
    </div>
  );
}

function Frame45BackgroundImage() {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="flex h-[99.01px] items-center justify-center relative shrink-0 w-0">
      <div className="flex-none rotate-[90deg]">
        <div className="h-0 relative w-[99.01px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 1">
              <line id="Line 166" opacity="0.4" stroke="var(--stroke-0, black)" x2="99.0102" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[1076.138px] left-[-20px] opacity-[0.08] top-0 w-[1960px]">
      <div className="absolute inset-[0_-0.06%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1811 1077">
          <g id="Group 2">
            <line id="Line 8" stroke="var(--stroke-0, white)" x1="0.500045" x2="0.5" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 11" stroke="var(--stroke-0, white)" x1="57.036" x2="57.0359" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 14" stroke="var(--stroke-0, white)" x1="113.573" x2="113.573" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 17" stroke="var(--stroke-0, white)" x1="170.109" x2="170.109" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 20" stroke="var(--stroke-0, white)" x1="226.645" x2="226.645" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 23" stroke="var(--stroke-0, white)" x1="283.18" x2="283.18" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 26" stroke="var(--stroke-0, white)" x1="339.717" x2="339.717" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 29" stroke="var(--stroke-0, white)" x1="396.253" x2="396.253" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 32" stroke="var(--stroke-0, white)" x1="452.789" x2="452.789" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 35" stroke="var(--stroke-0, white)" x1="509.326" x2="509.326" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 38" stroke="var(--stroke-0, white)" x1="565.862" x2="565.862" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 41" stroke="var(--stroke-0, white)" x1="622.397" x2="622.397" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 44" stroke="var(--stroke-0, white)" x1="678.933" x2="678.933" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 47" stroke="var(--stroke-0, white)" x1="735.469" x2="735.469" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 50" stroke="var(--stroke-0, white)" x1="792.006" x2="792.006" y1="2.33494e-08" y2="1076.14" />
            <line id="Line 53" stroke="var(--stroke-0, white)" x1="848.542" x2="848.542" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 56" stroke="var(--stroke-0, white)" x1="905.078" x2="905.078" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 59" stroke="var(--stroke-0, white)" x1="961.615" x2="961.615" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 62" stroke="var(--stroke-0, white)" x1="1018.15" x2="1018.15" y1="2.33494e-08" y2="1076.14" />
            <line id="Line 65" stroke="var(--stroke-0, white)" x1="1074.69" x2="1074.69" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 68" stroke="var(--stroke-0, white)" x1="1131.22" x2="1131.22" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 71" stroke="var(--stroke-0, white)" x1="1187.76" x2="1187.76" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 74" stroke="var(--stroke-0, white)" x1="1244.29" x2="1244.29" y1="2.33494e-08" y2="1076.14" />
            <line id="Line 77" stroke="var(--stroke-0, white)" x1="1300.83" x2="1300.83" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 80" stroke="var(--stroke-0, white)" x1="1357.37" x2="1357.37" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 83" stroke="var(--stroke-0, white)" x1="1413.9" x2="1413.9" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 86" stroke="var(--stroke-0, white)" x1="1470.44" x2="1470.44" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 89" stroke="var(--stroke-0, white)" x1="1526.97" x2="1526.97" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 92" stroke="var(--stroke-0, white)" x1="1583.51" x2="1583.51" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 95" stroke="var(--stroke-0, white)" x1="1640.05" x2="1640.05" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 98" stroke="var(--stroke-0, white)" x1="1696.58" x2="1696.58" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 101" stroke="var(--stroke-0, white)" x1="1753.12" x2="1753.12" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 9" stroke="var(--stroke-0, white)" x1="19.345" x2="19.345" y1="2.33494e-08" y2="1076.14" />
            <line id="Line 12" stroke="var(--stroke-0, white)" x1="75.8821" x2="75.882" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 15" stroke="var(--stroke-0, white)" x1="132.418" x2="132.418" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 18" stroke="var(--stroke-0, white)" x1="188.954" x2="188.954" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 21" stroke="var(--stroke-0, white)" x1="245.489" x2="245.489" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 24" stroke="var(--stroke-0, white)" x1="302.028" x2="302.028" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 27" stroke="var(--stroke-0, white)" x1="358.562" x2="358.562" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 30" stroke="var(--stroke-0, white)" x1="415.098" x2="415.098" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 33" stroke="var(--stroke-0, white)" x1="471.634" x2="471.634" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 36" stroke="var(--stroke-0, white)" x1="528.171" x2="528.171" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 39" stroke="var(--stroke-0, white)" x1="584.707" x2="584.707" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 42" stroke="var(--stroke-0, white)" x1="641.242" x2="641.242" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 45" stroke="var(--stroke-0, white)" x1="697.779" x2="697.779" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 48" stroke="var(--stroke-0, white)" x1="754.315" x2="754.315" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 51" stroke="var(--stroke-0, white)" x1="810.851" x2="810.851" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 54" stroke="var(--stroke-0, white)" x1="867.387" x2="867.387" y1="2.33494e-08" y2="1076.14" />
            <line id="Line 57" stroke="var(--stroke-0, white)" x1="923.924" x2="923.924" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 60" stroke="var(--stroke-0, white)" x1="980.46" x2="980.459" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 63" stroke="var(--stroke-0, white)" x1="1037" x2="1037" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 66" stroke="var(--stroke-0, white)" x1="1093.53" x2="1093.53" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 69" stroke="var(--stroke-0, white)" x1="1150.07" x2="1150.07" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 72" stroke="var(--stroke-0, white)" x1="1206.6" x2="1206.6" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 75" stroke="var(--stroke-0, white)" x1="1263.14" x2="1263.14" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 78" stroke="var(--stroke-0, white)" x1="1319.68" x2="1319.68" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 81" stroke="var(--stroke-0, white)" x1="1376.21" x2="1376.21" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 84" stroke="var(--stroke-0, white)" x1="1432.75" x2="1432.75" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 87" stroke="var(--stroke-0, white)" x1="1489.28" x2="1489.28" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 90" stroke="var(--stroke-0, white)" x1="1545.82" x2="1545.82" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 93" stroke="var(--stroke-0, white)" x1="1602.36" x2="1602.36" y1="2.33494e-08" y2="1076.14" />
            <line id="Line 96" stroke="var(--stroke-0, white)" x1="1658.89" x2="1658.89" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 99" stroke="var(--stroke-0, white)" x1="1715.43" x2="1715.43" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 102" stroke="var(--stroke-0, white)" x1="1771.96" x2="1771.96" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 10" stroke="var(--stroke-0, white)" x1="38.1911" x2="38.1911" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 13" stroke="var(--stroke-0, white)" x1="94.7269" x2="94.7269" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 16" stroke="var(--stroke-0, white)" x1="151.263" x2="151.263" y1="2.33494e-08" y2="1076.14" />
            <line id="Line 19" stroke="var(--stroke-0, white)" x1="207.8" x2="207.8" y1="2.33494e-08" y2="1076.14" />
            <line id="Line 22" stroke="var(--stroke-0, white)" x1="264.336" x2="264.335" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 25" stroke="var(--stroke-0, white)" x1="320.871" x2="320.871" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 28" stroke="var(--stroke-0, white)" x1="377.407" x2="377.407" y1="2.33494e-08" y2="1076.14" />
            <line id="Line 31" stroke="var(--stroke-0, white)" x1="433.944" x2="433.944" y1="2.33494e-08" y2="1076.14" />
            <line id="Line 34" stroke="var(--stroke-0, white)" x1="490.48" x2="490.48" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 37" stroke="var(--stroke-0, white)" x1="547.016" x2="547.016" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 40" stroke="var(--stroke-0, white)" x1="603.551" x2="603.551" y1="2.33494e-08" y2="1076.14" />
            <line id="Line 43" stroke="var(--stroke-0, white)" x1="660.088" x2="660.088" y1="2.33494e-08" y2="1076.14" />
            <line id="Line 46" stroke="var(--stroke-0, white)" x1="716.624" x2="716.624" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 49" stroke="var(--stroke-0, white)" x1="773.16" x2="773.16" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 52" stroke="var(--stroke-0, white)" x1="829.696" x2="829.696" y1="2.33494e-08" y2="1076.14" />
            <line id="Line 55" stroke="var(--stroke-0, white)" x1="886.233" x2="886.233" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 58" stroke="var(--stroke-0, white)" x1="942.769" x2="942.769" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 61" stroke="var(--stroke-0, white)" x1="999.304" x2="999.304" y1="2.33494e-08" y2="1076.14" />
            <line id="Line 64" stroke="var(--stroke-0, white)" x1="1055.84" x2="1055.84" y1="2.33494e-08" y2="1076.14" />
            <line id="Line 67" stroke="var(--stroke-0, white)" x1="1112.38" x2="1112.38" y1="2.28698e-08" y2="1076.14" />
            <line id="Line 70" stroke="var(--stroke-0, white)" x1="1168.91" x2="1168.91" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 73" stroke="var(--stroke-0, white)" x1="1225.45" x2="1225.45" y1="2.33494e-08" y2="1076.14" />
            <line id="Line 76" stroke="var(--stroke-0, white)" x1="1281.98" x2="1281.98" y1="2.33494e-08" y2="1076.14" />
            <line id="Line 79" stroke="var(--stroke-0, white)" x1="1338.52" x2="1338.52" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 82" stroke="var(--stroke-0, white)" x1="1395.06" x2="1395.06" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 85" stroke="var(--stroke-0, white)" x1="1451.59" x2="1451.59" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 88" stroke="var(--stroke-0, white)" x1="1508.13" x2="1508.13" y1="2.33494e-08" y2="1076.14" />
            <line id="Line 91" stroke="var(--stroke-0, white)" x1="1564.67" x2="1564.67" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 94" stroke="var(--stroke-0, white)" x1="1621.2" x2="1621.2" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 97" stroke="var(--stroke-0, white)" x1="1677.74" x2="1677.74" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 100" stroke="var(--stroke-0, white)" x1="1734.27" x2="1734.27" y1="2.27202e-08" y2="1076.14" />
            <line id="Line 103" stroke="var(--stroke-0, white)" x1="1790.81" x2="1790.81" y1="2.22536e-08" y2="1076.14" />
            <line id="Line 104" stroke="var(--stroke-0, white)" x1="1809.66" x2="1809.66" y1="2.27202e-08" y2="1076.14" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[1043.742px] left-[-20px] opacity-[0.08] top-[19.72px] w-[1960px]">
      <div className="absolute inset-[-0.1%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1855 850">
          <g id="Group 3">
            <line id="Line 105" stroke="var(--stroke-0, white)" x1="1.34507" x2="1854.92" y1="0.5" y2="0.5" />
            <line id="Line 106" stroke="var(--stroke-0, white)" x1="1.34507" x2="1854.92" y1="18.8113" y2="18.8113" />
            <line id="Line 107" stroke="var(--stroke-0, white)" x2="1853.58" y1="37.1225" y2="37.1225" />
            <line id="Line 108" stroke="var(--stroke-0, white)" x2="1853.58" y1="55.4338" y2="55.4338" />
            <line id="Line 109" stroke="var(--stroke-0, white)" x2="1853.58" y1="73.745" y2="73.745" />
            <line id="Line 110" stroke="var(--stroke-0, white)" x2="1853.58" y1="92.0563" y2="92.0563" />
            <line id="Line 111" stroke="var(--stroke-0, white)" x2="1853.58" y1="110.368" y2="110.368" />
            <line id="Line 112" stroke="var(--stroke-0, white)" x2="1853.58" y1="128.679" y2="128.679" />
            <line id="Line 113" stroke="var(--stroke-0, white)" x2="1853.58" y1="146.99" y2="146.99" />
            <line id="Line 114" stroke="var(--stroke-0, white)" x2="1853.58" y1="165.301" y2="165.301" />
            <line id="Line 115" stroke="var(--stroke-0, white)" x2="1853.58" y1="183.613" y2="183.613" />
            <line id="Line 116" stroke="var(--stroke-0, white)" x2="1853.58" y1="201.924" y2="201.924" />
            <line id="Line 117" stroke="var(--stroke-0, white)" x2="1853.58" y1="220.235" y2="220.235" />
            <line id="Line 118" stroke="var(--stroke-0, white)" x2="1853.58" y1="238.546" y2="238.546" />
            <line id="Line 119" stroke="var(--stroke-0, white)" x2="1853.58" y1="256.858" y2="256.858" />
            <line id="Line 120" stroke="var(--stroke-0, white)" x2="1853.58" y1="275.169" y2="275.169" />
            <line id="Line 121" stroke="var(--stroke-0, white)" x2="1853.58" y1="293.48" y2="293.48" />
            <line id="Line 122" stroke="var(--stroke-0, white)" x2="1853.58" y1="311.791" y2="311.791" />
            <line id="Line 123" stroke="var(--stroke-0, white)" x2="1853.58" y1="330.103" y2="330.103" />
            <line id="Line 124" stroke="var(--stroke-0, white)" x2="1853.58" y1="348.414" y2="348.414" />
            <line id="Line 125" stroke="var(--stroke-0, white)" x2="1853.58" y1="366.725" y2="366.725" />
            <line id="Line 126" stroke="var(--stroke-0, white)" x2="1853.58" y1="385.036" y2="385.036" />
            <line id="Line 127" stroke="var(--stroke-0, white)" x2="1853.58" y1="403.348" y2="403.348" />
            <line id="Line 128" stroke="var(--stroke-0, white)" x2="1853.58" y1="421.659" y2="421.659" />
            <line id="Line 129" stroke="var(--stroke-0, white)" x2="1853.58" y1="439.97" y2="439.97" />
            <line id="Line 130" stroke="var(--stroke-0, white)" x2="1853.58" y1="458.281" y2="458.281" />
            <line id="Line 131" stroke="var(--stroke-0, white)" x2="1853.58" y1="476.593" y2="476.593" />
            <line id="Line 132" stroke="var(--stroke-0, white)" x2="1853.58" y1="494.904" y2="494.904" />
            <line id="Line 133" stroke="var(--stroke-0, white)" x2="1853.58" y1="513.215" y2="513.215" />
            <line id="Line 134" stroke="var(--stroke-0, white)" x2="1853.58" y1="531.526" y2="531.526" />
            <line id="Line 135" stroke="var(--stroke-0, white)" x2="1853.58" y1="549.838" y2="549.838" />
            <line id="Line 136" stroke="var(--stroke-0, white)" x2="1853.58" y1="568.149" y2="568.149" />
            <line id="Line 137" stroke="var(--stroke-0, white)" x2="1853.58" y1="586.46" y2="586.46" />
            <line id="Line 138" stroke="var(--stroke-0, white)" x2="1853.58" y1="604.771" y2="604.771" />
            <line id="Line 139" stroke="var(--stroke-0, white)" x2="1853.58" y1="623.083" y2="623.083" />
            <line id="Line 140" stroke="var(--stroke-0, white)" x2="1853.58" y1="641.394" y2="641.394" />
            <line id="Line 141" stroke="var(--stroke-0, white)" x2="1853.58" y1="659.705" y2="659.705" />
            <line id="Line 142" stroke="var(--stroke-0, white)" x2="1853.58" y1="678.016" y2="678.016" />
            <line id="Line 143" stroke="var(--stroke-0, white)" x2="1853.58" y1="696.328" y2="696.328" />
            <line id="Line 144" stroke="var(--stroke-0, white)" x2="1853.58" y1="714.639" y2="714.639" />
            <line id="Line 145" stroke="var(--stroke-0, white)" x2="1853.58" y1="732.95" y2="732.95" />
            <line id="Line 146" stroke="var(--stroke-0, white)" x2="1853.58" y1="751.261" y2="751.261" />
            <line id="Line 147" stroke="var(--stroke-0, white)" x2="1853.58" y1="769.573" y2="769.573" />
            <line id="Line 148" stroke="var(--stroke-0, white)" x2="1853.58" y1="787.884" y2="787.884" />
            <line id="Line 149" stroke="var(--stroke-0, white)" x2="1853.58" y1="806.195" y2="806.195" />
            <line id="Line 150" stroke="var(--stroke-0, white)" x2="1853.58" y1="824.506" y2="824.506" />
            <line id="Line 151" stroke="var(--stroke-0, white)" x2="1853.58" y1="842.818" y2="842.818" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function BgLines() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  
  return (
    <motion.div 
      ref={ref}
      className="absolute contents left-0 top-0" 
      data-name="bg lines"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
    >
      <Group />
      <Group1 />
    </motion.div>
  );
}

function TracingLines() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  
  return (
    <motion.div 
      ref={ref}
      className="absolute h-[460px] left-[1.29px] top-[305px] w-[668.805px] hidden" 
      data-name="tracing lines"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 2, ease: "easeOut", delay: 1 }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 669 461">
        <g id="tracing lines">
          <motion.line 
            id="Line 1" 
            opacity="0.2" 
            stroke="var(--stroke-0, white)" 
            x1="84.6027" 
            x2="520.083" 
            y1="115" 
            y2="115"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 }}
          />
          <motion.line 
            id="Line 2" 
            opacity="0.2" 
            stroke="var(--stroke-0, white)" 
            x1="0.000137304" 
            x2="571.734" 
            y1="231" 
            y2="231"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 2.0 }}
          />
          <motion.line 
            id="Line 3" 
            opacity="0.2" 
            stroke="var(--stroke-0, white)" 
            x1="12.4678" 
            x2="571.734" 
            y1="347" 
            y2="347"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 2.5 }}
          />
          <motion.line 
            id="Line 6" 
            opacity="0.2" 
            stroke="var(--stroke-0, white)" 
            x1="125.958" 
            x2="125.958" 
            y1="460" 
            y2="3.15912e-08"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1.2 }}
          />
        </g>
      </svg>
    </motion.div>
  );
}

function GlassCard() {
  return null;
}

function Group12() {
  return (
    <div className="absolute contents left-[calc(50%+486.87px)] top-[589.56px] translate-x-[-50%]">
      <GlassCard />
      <div className="hidden absolute backdrop-blur-[9px] backdrop-filter border border-[rgba(255,255,255,0.27)] border-solid h-[10.179px] left-[calc(50%+486.87px)] rounded-[30px] top-[595.11px] translate-x-[-50%] w-[9.85px]" style={{ backgroundImage: "linear-gradient(110.779deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.12) 100%)" }} />
    </div>
  );
}

function GlassCard3() {
  return null;
}

function Group10() {
  return (
    <div className="absolute contents left-[calc(50%+486.87px)] top-[589.56px] translate-x-[-50%]">
      <GlassCard3 />
    </div>
  );
}

function GlassCard1() {
  return null;
}

function ArrowUpCircle() {
  return null;
}

function Frame({ introZoomComplete }: { introZoomComplete: boolean }) {
  const { scrollY } = useScroll({ layoutEffect: false });
  const heroTextY = useTransform(scrollY, [0, 1080], [0, 200]);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <motion.div 
      ref={ref}
      className="hidden absolute h-[79.809px] left-[280px] top-[761.95px] w-[187.938px] cursor-pointer group z-50"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView && introZoomComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
      onClick={scrollToContact}
      style={{ pointerEvents: 'auto', y: heroTextY }}
    >
      <div className="absolute bg-[#d4d4d4] h-[62px] left-[-150px] rounded-[13px] top-0 w-[200px] transition-all duration-300 group-hover:bg-[#c0c0c0] group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(212,212,212,0.6)]" />
      <div className="absolute flex flex-col items-center font-['Delight:Semi_Bold',sans-serif] justify-center leading-[0] left-[-150px] not-italic text-[14px] text-black text-nowrap top-[31px] tracking-[0.1px] translate-y-[-50%] w-[200px]">
        <p className="leading-[20px]">Get in touch</p>
      </div>
      <div className="absolute flex items-center justify-center left-[107px] size-[27px] top-[18px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <ArrowUpCircle />
        </div>
      </div>
    </motion.div>
  );
}

function Frame1({ heroTextY }: { heroTextY?: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdwJEZ4EhHuW1CzAyNztTjyP1YxbZCTG5S5njmUQAuVFdEu7A/viewform?usp=dialog', '_blank');
  };
  
  return (
    <motion.div 
      ref={ref}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="absolute w-[605px] h-[110px] left-[30px] top-[868px] cursor-pointer z-[100] pointer-events-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
      style={{ y: heroTextY }}
    >
      {/* Hand-drawn circular SVG that appears on hover */}
      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 340 80"
        style={{
          width: '340px',
          height: '80px',
          left: '20%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      >
        <motion.path
          d="M30,12 C22,10 14,9 10,14 C6,19 5,26 6,38 C7,50 9,62 15,68 C21,74 30,76 42,76 C95,77 170,76 245,75 C270,75 295,74 310,69 C325,64 332,54 330,42 C328,30 321,18 310,12 C299,6 283,5 265,6 C200,9 110,11 30,12 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isHovered ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ 
            pathLength: { duration: 0.8, ease: "easeInOut" },
            opacity: { duration: 0.3 }
          }}
          style={{ color: '#ffffff' }}
        />
      </svg>
      
      <p className="font-['Arimo',sans-serif] italic font-normal text-[22px] leading-[90px] text-white m-0 relative z-10">
        Lets work together
      </p>
    </motion.div>
  );
}

function Hero() {
  const { scrollY } = useScroll({ layoutEffect: false });
  const heroMonkeyY = useTransform(scrollY, [0, 1080], [0, -150]);
  
  // Parallax for hero text - scrolls faster than background
  const heroTextY = useTransform(scrollY, [0, 1080], [0, 200]);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  
  // Mouse tracking state for hero image
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Intro zoom state
  const [introZoomComplete, setIntroZoomComplete] = useState(false);
  
  // Track scroll for scroll indicator fade out
  const [hasScrolled, setHasScrolled] = useState(false);
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (typeof latest === 'number' && !isNaN(latest)) {
      // Track if user has scrolled for scroll indicator
      if (latest > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    }
  });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate movement based on cursor position relative to center
    const moveX = (e.clientX - centerX) / 15; // Divide by 15 for subtle movement
    const moveY = (e.clientY - centerY) / 15;
    
    setMousePosition({ x: moveX, y: moveY });
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };
  
  return (
    <div className="relative contents" data-name="Hero">
      {/* Mouse tracking overlay for entire hero section */}
      <div 
        className="h-[1080px] w-full max-w-[1920px] mx-auto z-0 pointer-events-auto"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
      />
      
      {/* Background - FIXED to stay in place during scroll */}
      <div ref={ref} className="fixed bg-[#0d151f] h-[1080px] left-[50%] top-0 w-[1920px] z-0 -translate-x-1/2 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute h-[1333px] left-[-40px] top-[-127px] w-[2000px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeroBg} />
        </div>
        
        {/* Grain Texture Overlay for Hero */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
      </div>
      
      {/* Grid lines - FIXED to stay visible across both Hero and Story sections */}
      <motion.div
        className="fixed left-[50%] top-0 w-[1920px] h-[1080px] z-0 -translate-x-1/2 hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: introZoomComplete ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <BgLines />
      </motion.div>
      
      {/* TracingLines - Move with hero text using PARALLAX */}
      <div
        className="absolute left-[50%] top-0 w-[1920px] h-[1080px] z-10 -translate-x-1/2"
        style={{ y: heroTextY }}
      >
        <TracingLines />
      </div>
      
      {/* Hero text - No animations, appears immediately */}
      <motion.div 
        className="absolute font-normal leading-[0] left-[30px] text-[0px] text-white top-[170px] w-[1100px] h-[528px] z-20"
        style={{ y: heroTextY }}
      >
        {/* Line 1: "Where design" */}
        <motion.p 
          className="leading-[130px] mb-0 text-[142px] font-['Arimo',sans-serif]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="font-['Imperial_Script',cursive] text-[180px] mr-4">W</span>here design
        </motion.p>
        
        {/* Line 2: "starts clean" */}
        <motion.p 
          className="leading-[130px] mb-0 text-[142px] font-['Arimo',sans-serif]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          starts clean
        </motion.p>
        
        {/* Line 3: "and ends" */}
        <motion.p 
          className="leading-[130px] mb-0 text-[142px] font-['Arimo',sans-serif]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          and ends
        </motion.p>
        
        {/* Line 4: "clear" */}
        <motion.p 
          className="leading-[130px] text-[142px] font-['Arimo',sans-serif]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          clear
        </motion.p>
      </motion.div>
      
      {/* C Logo background - FIXED (no parallax) */}
      <div 
        className="fixed h-[1061.979px] left-[50%] opacity-[0.03] top-[9.01px] w-[872.753px] z-0" 
        style={{ marginLeft: 'calc(-960px + 1112.17px)' }}
        data-name="c logo bg"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[110.91%]" src={imgCLogoBg} />
        </div>
      </div>
      
      {/* Hero monkey - Part of hero section */}
      <motion.div 
        className="absolute h-[1020px] right-0 top-[60px] w-[765px] pointer-events-none z-[110]" 
        data-name="hero monkey"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1
        }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut"
        }}
        onAnimationComplete={() => setIntroZoomComplete(true)}
      >
          <motion.div 
            className="absolute inset-0 overflow-hidden"
            animate={introZoomComplete ? {
              x: mousePosition.x,
              y: mousePosition.y
            } : {}}
            transition={{ 
              type: "spring", 
              stiffness: 150, 
              damping: 15,
              mass: 0.1
            }}
          >
            <motion.img 
              alt="" 
              className="absolute h-[101.29%] left-[-65.28%] max-w-none top-[-0.82%] w-[241.2%] floating-image" 
              src={imgHeroMonkey}
              animate={introZoomComplete ? {
                x: mousePosition.x * 0.3,
                y: mousePosition.y * 0.3
              } : {}}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20,
                mass: 0.5
              }}
            />
          </motion.div>
        </motion.div>
      
      {/* CTA buttons and glass card */}
      <Frame1 heroTextY={heroTextY} />
      
      {/* Scroll Indicator with PARALLAX */}
      <motion.div 
        className="absolute left-[935px] top-[880px] flex flex-col items-center gap-[3.765px] z-50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: introZoomComplete && !hasScrolled ? 0.99 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ y: heroTextY }}
      >
        {/* SCROLL text */}
        <motion.p 
          className="text-[#fdd2b0] font-['Arimo',sans-serif] text-[14px] tracking-[3px] uppercase m-0 leading-[21px] opacity-99"
          animate={{ opacity: [0.99, 0.5, 0.99] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          SCROLL
        </motion.p>
        
        {/* Vertical line */}
        <div className="relative h-[99.998px] w-[0.991px] overflow-hidden bg-transparent">
          <motion.div 
            className="absolute top-0 left-0 w-full h-[39.995px] bg-gradient-to-b from-[#fdd2b0] to-transparent"
            animate={{ y: [0, 60, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}

function Hamburger({ hamburgerColor = '#E9E4E4' }: { hamburgerColor?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "About us", href: "#story" },
    { name: "Our Work", href: "#projects" },
    { name: "Contact us", href: "#footer" }
  ];

  return (
    <>
      {/* Hamburger Icon - Clickable */}
      <div 
        className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 z-50 pointer-events-none" 
        data-name="hamburger"
      >
        <div className="[grid-area:1_/_1] h-0 ml-[1120px] mt-[10px] relative w-[55px] pointer-events-auto cursor-pointer" onClick={() => setIsMenuOpen(true)}>
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 4">
              <line id="Line 163" stroke={hamburgerColor} strokeLinecap="round" strokeWidth="4" x2="55" y1="2" y2="2" />
            </svg>
          </div>
        </div>
        <div className="[grid-area:1_/_1] h-px ml-[1145px] mt-[25px] relative w-[35px] pointer-events-auto cursor-pointer" onClick={() => setIsMenuOpen(true)}>
          <div className="absolute bottom-full left-0 right-0 top-[-200%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 4">
              <line id="Line 164" stroke={hamburgerColor} strokeLinecap="round" strokeWidth="4" x2="35" y1="2" y2="2" />
            </svg>
          </div>
        </div>
        <div className="[grid-area:1_/_1] h-px ml-[1120px] mt-[40px] relative w-[55px] pointer-events-auto cursor-pointer" onClick={() => setIsMenuOpen(true)}>
          <div className="absolute bottom-full left-0 right-0 top-[-200%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 4">
              <line id="Line 165" stroke={hamburgerColor} strokeLinecap="round" strokeWidth="4" x2="55" y1="2" y2="2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Slide-in Menu Panel - Using Portal to escape stacking context */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop Overlay */}
              <motion.div
                className="bg-black/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsMenuOpen(false)}
                style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, inset: 0, zIndex: 999999 }}
              />

              {/* Menu Panel sliding from right */}
              <motion.div
                className="bg-[#0a0a0a] shadow-2xl flex flex-col"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                style={{ position: 'fixed', top: 0, right: 0, height: '100vh', width: '400px', zIndex: 1000000 }}
              >
                {/* Close Button */}
                <div className="flex justify-end p-8">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[#d4d4d4] hover:text-white hover:bg-white/10 transition-all rounded-full p-2"
                    aria-label="Close menu"
                  >
                    <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                      <line x1="8" y1="8" x2="24" y2="24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      <line x1="24" y1="8" x2="8" y2="24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col items-start px-12 py-8 space-y-8">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="font-['Delight:Regular',sans-serif] text-[32px] text-[#d4d4d4] hover:text-white transition-colors cursor-pointer"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

// Frame36 removed - functionality moved to Navbar component to avoid duplication

function Frame25() {
  return (
    <div className="h-[56px] relative shrink-0 w-[230px]">
      <p className="absolute font-['Delight:Regular',sans-serif] font-normal h-[56px] leading-[30px] left-[43.17px] text-[22px] text-black top-0 w-[217.453px]">Strategy built into every pixel</p>
      <div className="absolute left-0 size-[25px] top-[4px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="h-[66px] relative shrink-0 w-[280px]">
      <p className="absolute font-['Delight:Regular',sans-serif] font-normal h-[66px] leading-[30px] left-[49px] text-[22px] text-black top-0 w-[301.628px]">Fast turnarounds with consistent quality</p>
      <div className="absolute left-0 size-[29px] top-[4px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="h-[67px] relative shrink-0 w-[262px]">
      <p className="absolute font-['Delight:Regular',sans-serif] font-normal h-[66px] leading-[30px] left-[52px] text-[22px] text-black top-px w-[221.461px]">End-to-end brand + creative support</p>
      <div className="absolute left-0 size-[32px] top-0" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="h-[67px] relative shrink-0 w-[276px]">
      <p className="absolute font-['Delight:Regular',sans-serif] font-normal h-[66px] leading-[30px] left-[55px] text-[22px] text-black top-px w-[221.461px]">High-performing ads and landing pages</p>
      <div className="absolute left-0 size-[35px] top-0" data-name="image 8">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="hidden absolute content-stretch flex gap-[20px] items-center justify-center left-[213.5px] top-[82px] w-[1493px]">
      <Frame25 />
      <Frame45BackgroundImage />
      <Frame26 />
      <Frame45BackgroundImage />
      <Frame27 />
      <Frame45BackgroundImage />
      <Frame28 />
    </div>
  );
}

function StickyTop() {
  return (
    <div className="contents pointer-events-auto sticky top-0" data-name="sticky top">
      <div className="hidden absolute bg-[#d4d4d4] h-[263px] left-0 top-0 w-[1928px]" />
      <Frame29 />
    </div>
  );
}

function ValuePropositionStickyTop() {
  return null;
}

function Frame2() {
  return (
    <a href="#about" className="absolute h-[83.869px] left-[618.08px] top-[509.85px] w-[293.689px] cursor-pointer group">
      <div 
        className="absolute bg-[#0a0a0a] border border-[#d4d4d4] border-solid h-[62px] left-0 rounded-[13px] top-0 w-[179px] transition-all duration-300 group-hover:bg-[#d4d4d4] group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(212,212,212,0.5)]"
      />
      <div className="absolute flex flex-col font-['Delight:Semi_Bold',sans-serif] justify-center leading-[0] left-[41px] not-italic text-[#d4d4d4] text-[14px] text-nowrap top-[31px] tracking-[0.1px] translate-y-[-50%] transition-colors duration-300 group-hover:text-[#0a0a0a]">
        <p className="leading-[20px]">Read our story</p>
      </div>
    </a>
  );
}

function StorySection() {
  return <ImprovedStorySection />;
}

function StorySectionOLD() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Story section">
      <div className="absolute bg-[#0a0a0a] h-[817px] left-0 top-0 w-[1929px]" />
      
      {/* Heading - reveal line by line */}
      <div className="absolute font-['Delight:Semi_Bold',sans-serif] h-[193.511px] leading-[normal] left-[125.48px] not-italic text-[48px] text-white top-[273.94px] w-[393.81px]">
        <motion.p 
          className="mb-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {`A fresh start `}
        </motion.p>
        <div className="relative inline-block">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            for brands
          </motion.p>
          {/* Animated underline accent */}
          <motion.div 
            className="absolute left-0 bottom-[-12px] h-[3px] bg-gradient-to-r from-[#fdd2b0] via-[#fdd2b0]/70 to-transparent rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "250px", opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          />
        </div>
      </div>
      {/* Paragraph section - reveal line by line */}
      <div className="absolute font-['Delight:Regular',sans-serif] font-normal h-[208px] leading-[0] left-[618.41px] text-[20px] text-[#c0c0c0] top-[271px] w-[1185.289px]">
        <motion.p 
          className="leading-[30px] mb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          {`In a world full of loud brands, hyper-stimulation, and AI-generated clutter, I create the opposite: design that feels intentional, modern, and calm — yet powerful enough to convert. I help founders, marketers, and product teams build brands people instantly understand  and naturally trust.`}
        </motion.p>
        <p className="leading-[30px] mb-0">&nbsp;</p>
        <motion.p 
          className="leading-[30px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
        >
          <span className="font-['Delight:Extra_Light',sans-serif] font-extralight text-white font-bold">Our chimp isn’t a mascot. It’s a mirror</span>
          <span>{` — a reminder that great design comes from deep observation, honest thinking, and evolutionary simplicity.`}</span>
        </motion.p>
      </div>
      <div className="absolute h-0 left-[33.37px] top-[424.58px] w-[424.513px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 425 1">
            <line id="Line 6" opacity="0.12" stroke="var(--stroke-0, white)" x2="424.513" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[33.37px] top-[284.54px] w-[491.261px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 492 1">
            <line id="Line 8" opacity="0.12" stroke="var(--stroke-0, white)" x2="491.261" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[287.507px] items-center justify-center left-[125.48px] top-[242.07px] w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[287.507px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288 1">
                <line id="Line 7" opacity="0.12" stroke="var(--stroke-0, white)" x2="287.507" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[817px] left-0 top-0 w-[1929px]">
      <StorySection />
    </div>
  );
}

function StoryStickyTop({ monkeyOpacity }: { monkeyOpacity: number }) {
  return (
    <div className="contents pointer-events-auto sticky top-0" data-name="story sticky top 3">
      <Frame5 monkeyOpacity={monkeyOpacity} />
    </div>
  );
}

function BrandStory({ monkeyOpacity }: { monkeyOpacity: number }) {
  return (
    <div className="relative h-[1080px] w-full max-w-[1920px] mx-auto bg-[#0a0a0a]" data-name="brand story 2">
      {/* Grain Texture Overlay for Brand Story */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
      <div className="absolute bottom-0 h-[1080px] left-0 pointer-events-none top-0">
        <StoryStickyTop monkeyOpacity={monkeyOpacity} />
      </div>
    </div>
  );
}

function GlassCard4() {
  return null;
}

function Group13() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[calc(50%-8px)] mt-0 place-items-start relative">
      <GlassCard4 />
      <div className="[grid-area:1_/_1] backdrop-blur-[9px] backdrop-filter border border-[rgba(255,255,255,0.27)] border-solid h-[7.907px] ml-[4.17px] mt-[4.31px] rounded-[30px] w-[7.652px]" style={{ backgroundImage: "linear-gradient(110.779deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.12) 100%)" }} />
    </div>
  );
}

function GlassCard5() {
  return null;
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <GlassCard5 />
    </div>
  );
}

function GlassCard6() {
  return null;
}

function GlassCard2() {
  return null;
}

function Group5() {
  return (
    <div className="absolute contents left-0 text-white top-0">
      <motion.p 
        className="absolute font-['Delight:Semi_Bold',sans-serif] leading-[1.1] left-0 not-italic text-[56px] top-0 w-[750px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Diagnose
      </motion.p>
      <div className="absolute font-['Delight:Light',sans-serif] font-light leading-[1.5] left-0 text-[32px] top-[90px] w-[750px] text-[#d4d4d4]/90">
        <motion.p 
          className="mb-2 text-[32px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {`I understand your brand, product, audience, and intention. `}
        </motion.p>
        <motion.p 
          className="text-[32px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          No assumptions, no rushing.
        </motion.p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-0 text-white top-[412px]">
      <motion.p 
        className="absolute font-['Delight:Semi_Bold',sans-serif] leading-[1.1] left-0 not-italic text-[56px] top-[412px] w-[750px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Distill
      </motion.p>
      <div className="absolute font-['Delight:Light',sans-serif] font-light leading-[1.5] left-0 text-[32px] top-[502px] w-[750px] text-[#d4d4d4]/90">
        <motion.p 
          className="mb-2 text-[32px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {`I remove everything that doesn't matter. `}
        </motion.p>
        <motion.p 
          className="text-[32px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          What remains becomes the foundation.
        </motion.p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-0 text-white top-[824px]">
      <motion.p 
        className="absolute font-['Delight:Semi_Bold',sans-serif] leading-[1.1] left-0 not-italic text-[56px] top-[824px] w-[750px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Design
      </motion.p>
      <div className="absolute font-['Delight:Light',sans-serif] font-light leading-[1.5] left-0 text-[32px] top-[914px] w-[750px] text-[#d4d4d4]/90">
        <motion.p 
          className="mb-2 text-[32px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {`With clarity in place, I craft clean, modern `}
        </motion.p>
        <motion.p 
          className="text-[32px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          visuals with restraint.
        </motion.p>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-0 text-white top-[1236px]">
      <motion.p 
        className="absolute font-['Delight:Semi_Bold',sans-serif] leading-[1.1] left-0 not-italic text-[56px] top-[1236px] w-[750px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Deliver
      </motion.p>
      <div className="absolute font-['Delight:Light',sans-serif] font-light leading-[1.5] left-0 text-[32px] top-[1326px] w-[750px] text-[#d4d4d4]/90">
        <motion.p 
          className="mb-2 text-[32px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {`Fast turnaround. Consistent quality. `}
        </motion.p>
        <motion.p 
          className="text-[32px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          A complete, ready-to-use design system.
        </motion.p>
      </div>
    </div>
  );
}

// Frame3, Group9, Frame4, and Group4 functions removed - replaced with IntentionSection component

function Intention() {
  return (
    <div className="sticky top-20 z-[5] -mt-8">
      <IntentionSection />
    </div>
  );
}

function Quote() {
  return (
    <QuoteSection />
  );
}

function QuoteOld_BACKUP() {
  return (
    <div className="bg-[rgb(255,239,221)] content-stretch flex h-[1080px] items-center justify-center pointer-events-auto px-[253px] py-0 relative translate-x-[-50%] w-[1920px]" data-name="quote">
      <p className="font-['Playfair_Display',serif] leading-[1.5] not-italic relative shrink-0 text-[56px] text-black text-center max-w-[1400px] tracking-[4.68px] uppercase">“When design is clear, performance improves automatically.”</p>
    </div>
  );
}

function Quote1() {
  return (
    <div className="relative z-[17] flex items-start justify-center bg-[#0a0a0a] min-h-[1080px] mt-[100px]">
      <QuoteSection />
    </div>
  );
}

function Frame14() {
  const ref = useRef(null);
  
  return (
    <div 
      ref={ref}
      id="first-project-trigger"
      className="relative shadow-[8px_8px_8px_0px_rgba(0,0,0,0.75)] group cursor-pointer transition-all duration-500 w-full"
    >
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#fdd2b0] transition-all duration-500 pointer-events-none rounded-sm" />
      <img alt="" className="block w-full h-auto pointer-events-none transition-transform duration-500" src={imgFrame30} />
    </div>
  );
}

function Card() {
  return (
    <motion.div 
      className="overflow-clip pointer-events-auto sticky top-0 w-full h-full" 
      data-name="card 1"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Frame14 />
    </motion.div>
  );
}

function Frame15() {
  return (
    <div className="relative shadow-[8px_8px_8px_0px_rgba(0,0,0,0.75)] group cursor-pointer transition-all duration-500 w-full">
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#fdd2b0] transition-all duration-500 pointer-events-none rounded-sm" />
      <img alt="" className="block w-full h-auto pointer-events-none transition-transform duration-500" src={imgFrame31} />
    </div>
  );
}

function Card1() {
  return (
    <motion.div 
      className="overflow-clip pointer-events-auto sticky top-0 w-full h-full" 
      data-name="card 2"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
    >
      <Frame15 />
    </motion.div>
  );
}

function Frame16() {
  return (
    <div className="relative shadow-[8px_8px_8px_0px_rgba(0,0,0,0.65)] group cursor-pointer transition-all duration-500 w-full">
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#fdd2b0] transition-all duration-500 pointer-events-none rounded-sm" />
      <img alt="" className="block w-full h-auto pointer-events-none transition-transform duration-500" src={imgFrame32} />
    </div>
  );
}

function Card2() {
  return (
    <motion.div 
      className="overflow-clip pointer-events-auto sticky top-0 w-full h-full" 
      data-name="card 3"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
    >
      <Frame16 />
    </motion.div>
  );
}

function Frame17() {
  return (
    <div className="relative shadow-[8px_8px_8px_0px_rgba(0,0,0,0.35)] group cursor-pointer transition-all duration-500 w-full">
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#fdd2b0] transition-all duration-500 pointer-events-none rounded-sm" />
      <img alt="" className="block w-full h-auto pointer-events-none transition-transform duration-500" src={imgFrame33} />
    </div>
  );
}

function Card3() {
  return (
    <motion.div 
      className="overflow-clip pointer-events-auto sticky top-0 w-full h-full" 
      data-name="card 4"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
    >
      <Frame17 />
    </motion.div>
  );
}

function Frame18() {
  return (
    <div className="relative shadow-[6px_10px_8px_0px_rgba(0,0,0,0.15)] group cursor-pointer transition-all duration-500 w-full">
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#fdd2b0] transition-all duration-500 pointer-events-none rounded-sm" />
      <img alt="" className="block w-full h-auto pointer-events-none transition-transform duration-500" src={imgFrame34} />
    </div>
  );
}

function Card4() {
  return (
    <motion.div 
      className="overflow-clip pointer-events-auto sticky top-0 w-full h-full" 
      data-name="card 5"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
    >
      <Frame18 />
    </motion.div>
  );
}

function Frame19() {
  return null;
}

function Card5() {
  return null;
}

function Frame20() {
  return null;
}

function Card6() {
  return null;
}

function Frame21() {
  return null;
}

function Card7() {
  return null;
}

function ScrollProjects() {
  return (
    <div className="relative w-full flex flex-col" data-name="scroll projects">
      {/* Frame 14 - First Project - No scroll animation, appears immediately */}
      <div className="sticky top-20 z-[10] flex items-start justify-center pt-2 pb-8 bg-[#0a0a0a]">
        <div className="w-full max-w-[1920px]">
          <Frame14 />
        </div>
      </div>
      
      {/* Frame 15 - Second Project */}
      <div className="sticky top-20 z-[11] flex items-start justify-center pt-2 pb-8 bg-[#0a0a0a]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="w-full max-w-[1920px]"
        >
          <Frame15 />
        </motion.div>
      </div>
      
      {/* Frame 16 - Third Project */}
      <div className="sticky top-20 z-[12] flex items-start justify-center pt-2 pb-8 bg-[#0a0a0a]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-[1920px]"
        >
          <Frame16 />
        </motion.div>
      </div>
      
      {/* Frame 17 - Fourth Project */}
      <div className="sticky top-20 z-[13] flex items-start justify-center pt-2 pb-8 bg-[#0a0a0a]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="w-full max-w-[1920px]"
        >
          <Frame17 />
        </motion.div>
      </div>
      
      {/* Frame 18 - Fifth Project */}
      <div className="sticky top-20 z-[14] flex items-start justify-center pt-2 bg-[#0a0a0a]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="w-full max-w-[1920px]"
        >
          <Frame18 />
        </motion.div>
      </div>
    </div>
  );
}

function StickyTop1() {
  return (
    <div id="first-project-trigger" className="absolute bg-[#0a0a0a] content-stretch flex flex-col items-center justify-center overflow-clip pb-0 pt-[30px] px-0 right-0 -top-[800px] w-[1923px]" data-name="sticky top 6">
      <ScrollProjects />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[641px] items-start left-[75px] top-[148px] w-[25px]">
      <div className="flex h-[43px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "41", "--transform-inner-height": "18" } as React.CSSProperties}>
        <BackgroundImageAndText text="Honest" additionalClassNames="rotate-[270deg]" />
      </div>
      <div className="flex h-[58px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "54", "--transform-inner-height": "18" } as React.CSSProperties}>
        <BackgroundImageAndText text="Aesthetic" additionalClassNames="rotate-[270deg]" />
      </div>
      <div className="flex h-[60px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "56", "--transform-inner-height": "18" } as React.CSSProperties}>
        <BackgroundImageAndText text="Confident" additionalClassNames="rotate-[270deg]" />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[760px] items-start left-[1841px] top-[2261px] w-[25px]">
      <div className="flex h-[64px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "61", "--transform-inner-height": "18" } as React.CSSProperties}>
        <BackgroundImageAndText text="Intentional" additionalClassNames="rotate-[90deg]" />
      </div>
      <div className="flex h-[45px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "44", "--transform-inner-height": "18" } as React.CSSProperties}>
        <BackgroundImageAndText text="elegant" additionalClassNames="rotate-[90deg]" />
      </div>
      <div className="flex h-[39px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "37", "--transform-inner-height": "18" } as React.CSSProperties}>
        <BackgroundImageAndText text="Clarity" additionalClassNames="rotate-[90deg]" />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="gap-px grid-cols-[fit-content(100%)_380px] grid-rows-[fit-content(100%)_25px_25px] inline-grid pb-0 pl-[65px] pr-0 pt-[100px] shrink-0 sticky top-0">
      <div className="[grid-area:1_/_1] ml-[50px] relative">
        <p className="font-['Delight:Semi_Bold',sans-serif] leading-[normal] not-italic shrink-0 text-[48px] text-nowrap text-white">What I do</p>
        {/* Animated underline accent */}
        <motion.div 
          className="absolute left-0 bottom-[-8px] h-[3px] bg-gradient-to-r from-[#fdd2b0] via-[#fdd2b0]/70 to-transparent rounded-full"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "200px", opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[136px] relative shrink-0 text-white w-[529px]">
      <p className="absolute font-['Delight:Semi_Bold',sans-serif] leading-[normal] left-0 not-italic text-[28px] top-0 w-[529px]">Brand Identity System</p>
      <div className="absolute font-['Delight:Regular',sans-serif] font-normal leading-[40px] left-0 text-[18px] text-nowrap top-[56px] text-white/80">
        <p className="mb-0">{`Logo design, visual system, typography, color strategy, `}</p>
        <p>packaging, brand assets, and brand manuals.</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[529px]">
      <Frame10 />
    </div>
  );
}

function Frame13() {
  return (
    <motion.div 
      className="bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] content-stretch flex gap-[40px] h-[413px] items-start pb-[150px] pt-[48px] px-[50px] relative rounded-[20px] shrink-0 w-[700px] border border-[#fdd2b0]/20 shadow-[0_0_40px_rgba(253,210,176,0.1)] transition-all duration-500 hover:border-[#fdd2b0]/60 hover:shadow-[0_0_60px_rgba(253,210,176,0.3)] hover:scale-[1.02] group overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Animated gradient background overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#fdd2b0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]"
      />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#fdd2b0] to-transparent opacity-40" />
      
      {/* Content */}
      <div className="relative z-10 flex gap-[40px] w-full">
        <Frame11 />
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <IconBackgroundImage />
          {/* Icon glow effect */}
          <div className="absolute inset-0 bg-[#fdd2b0] opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-opacity duration-500" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function Card8() {
  return (
    <motion.div 
      className="content-stretch flex flex-col items-center justify-center overflow-clip pb-0 pointer-events-auto pt-[70px] px-0 sticky top-0 w-[780px] relative" 
      data-name="card 1"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Gradient bar accent */}
      <motion.div 
        className="absolute left-[-50px] top-[80px] w-[3px] h-[100px] bg-gradient-to-b from-[#fdd2b0] to-transparent rounded-full"
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      {/* Glowing accent dot */}
      <motion.div 
        className="absolute left-[-56px] top-[70px] w-[15px] h-[15px] rounded-full bg-[#fdd2b0] shadow-[0_0_30px_12px_rgba(253,210,176,0.8)]"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.4, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Connecting line to card */}
      <motion.div 
        className="absolute left-[-40px] top-[75px] w-[40px] h-[2px] bg-gradient-to-r from-[#fdd2b0]/60 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.7 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      />
      <Frame13 />
    </motion.div>
  );
}

function Frame12() {
  return (
    <div className="h-[136px] relative shrink-0 text-white w-[529px]">
      <p className="absolute font-['Delight:Semi_Bold',sans-serif] leading-[normal] left-0 not-italic text-[28px] top-0 w-[529px]">{`UI/UX & Website Design`}</p>
      <div className="absolute font-['Delight:Regular',sans-serif] font-normal leading-[40px] left-0 text-[18px] text-nowrap top-[56px] text-white/80">
        <p className="mb-0">{`Landing pages, product flows, dashboards, and `}</p>
        <p>conversion-focused interfaces.</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame12 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[529px]">
      <Frame22 />
    </div>
  );
}

function Frame24() {
  return (
    <motion.div 
      className="bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] h-[383px] relative rounded-[20px] shrink-0 w-full border border-[#fdd2b0]/20 shadow-[0_0_40px_rgba(253,210,176,0.1)] transition-all duration-500 hover:border-[#fdd2b0]/60 hover:shadow-[0_0_60px_rgba(253,210,176,0.3)] hover:scale-[1.02] group overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Animated gradient background overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#fdd2b0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]"
      />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#fdd2b0] to-transparent opacity-40" />
      
      <div className="size-full relative z-10">
        <div className="content-stretch flex gap-[50px] items-start pb-[150px] pt-[48px] px-[50px] relative size-full">
          <Frame23 />
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <IconBackgroundImage />
            {/* Icon glow effect */}
            <div className="absolute inset-0 bg-[#fdd2b0] opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-opacity duration-500" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function Card9() {
  return (
    <motion.div 
      className="content-stretch flex flex-col items-start overflow-clip pb-0 pointer-events-auto pt-[90px] px-[30px] sticky top-0 w-[780px] relative" 
      data-name="card 2"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    >
      {/* Gradient bar accent */}
      <motion.div 
        className="absolute left-[-40px] top-[100px] w-[3px] h-[100px] bg-gradient-to-b from-[#fdd2b0] to-transparent rounded-full"
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      {/* Glowing accent dot */}
      <motion.div 
        className="absolute left-[-46px] top-[90px] w-[15px] h-[15px] rounded-full bg-[#fdd2b0] shadow-[0_0_30px_12px_rgba(253,210,176,0.8)]"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.4, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      {/* Connecting line to card */}
      <motion.div 
        className="absolute left-[-30px] top-[95px] w-[30px] h-[2px] bg-gradient-to-r from-[#fdd2b0]/60 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.7 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      />
      <Frame24 />
    </motion.div>
  );
}

function Frame30() {
  return (
    <div className="h-[136px] relative shrink-0 text-white w-[529px]">
      <p className="absolute font-['Delight:Semi_Bold',sans-serif] leading-[normal] left-0 not-italic text-[28px] top-0 w-[529px]">{`Creative Design & Collateral`}</p>
      <div className="absolute font-['Delight:Regular',sans-serif] font-normal leading-[40px] left-0 text-[18px] text-nowrap top-[56px] text-white/80">
        <p className="mb-0">{`Social posts, pitch decks, marketing materials, `}</p>
        <p>posters, brochures, digital ads.</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame30 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[529px]">
      <Frame31 />
    </div>
  );
}

function Frame33() {
  return (
    <motion.div 
      className="bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] h-[363px] relative rounded-[20px] shrink-0 w-full border border-[#fdd2b0]/20 shadow-[0_0_40px_rgba(253,210,176,0.1)] transition-all duration-500 hover:border-[#fdd2b0]/60 hover:shadow-[0_0_60px_rgba(253,210,176,0.3)] hover:scale-[1.02] group overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Animated gradient background overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#fdd2b0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]"
      />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#fdd2b0] to-transparent opacity-40" />
      
      <div className="size-full relative z-10">
        <div className="content-stretch flex gap-[60px] items-start pb-[150px] pt-[48px] px-[50px] relative size-full">
          <Frame32 />
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <IconBackgroundImage />
            {/* Icon glow effect */}
            <div className="absolute inset-0 bg-[#fdd2b0] opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-opacity duration-500" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function Card10() {
  return (
    <motion.div 
      className="content-stretch flex flex-col items-start overflow-clip pb-0 pointer-events-auto pt-[110px] px-[20px] sticky top-0 w-[780px] relative" 
      data-name="card 3"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      {/* Gradient bar accent */}
      <motion.div 
        className="absolute left-[-30px] top-[120px] w-[3px] h-[100px] bg-gradient-to-b from-[#fdd2b0] to-transparent rounded-full"
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      {/* Glowing accent dot */}
      <motion.div 
        className="absolute left-[-36px] top-[110px] w-[15px] h-[15px] rounded-full bg-[#fdd2b0] shadow-[0_0_30px_12px_rgba(253,210,176,0.8)]"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.4, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
      {/* Connecting line to card */}
      <motion.div 
        className="absolute left-[-20px] top-[115px] w-[20px] h-[2px] bg-gradient-to-r from-[#fdd2b0]/60 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.7 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      />
      <Frame33 />
    </motion.div>
  );
}

function Frame34() {
  return (
    <div className="h-[184px] relative shrink-0 text-black w-[529px]">
      <p className="absolute font-['Delight:Semi_Bold',sans-serif] leading-[normal] left-0 not-italic text-[28px] top-0 w-[529px]">Performance Marketing Creative</p>
      <div className="absolute font-['Delight:Regular',sans-serif] font-normal leading-[40px] left-0 text-[18px] text-nowrap top-[102px]">
        <p className="mb-0">{`High-performing ad creatives, UGC-style ads, hooks, `}</p>
        <p>product demos, and iteration sets.</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[529px]">
      <Frame35 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[#d3d0a1] h-[353px] relative rounded-[10px] shrink-0 w-full">
      <div className="size-full hidden">
        <div className="content-stretch flex gap-[80px] items-start pb-[150px] pt-[48px] px-[50px] relative size-full hidden">
          <Frame37 />
          <IconBackgroundImage />
        </div>
      </div>
    </div>
  );
}

function Card11() {
  return (
    <motion.div 
      className="content-stretch flex flex-col items-start overflow-clip pb-0 pointer-events-auto pt-[130px] px-[10px] sticky top-0 w-[780px] hidden" 
      data-name="card 4"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
    >
      <Frame39 />
    </motion.div>
  );
}

function Frame40() {
  return (
    <div className="h-[184px] relative shrink-0 text-white w-[529px]">
      <p className="absolute font-['Delight:Semi_Bold',sans-serif] leading-[normal] left-0 not-italic text-[28px] top-0 w-[529px]">{`Pitch Decks & Presentation Systems`}</p>
      <div className="absolute font-['Delight:Regular',sans-serif] font-normal leading-[40px] left-0 text-[18px] text-nowrap top-[102px] text-white/80">
        <p className="mb-0">{`Investor decks, product decks, internal decks, and `}</p>
        <p>storytelling structures.</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame40 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[529px]">
      <Frame41 />
    </div>
  );
}

function Frame43() {
  return (
    <motion.div 
      className="bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] h-[333px] relative rounded-[20px] shrink-0 w-full border border-[#fdd2b0]/20 shadow-[0_0_40px_rgba(253,210,176,0.1)] transition-all duration-500 hover:border-[#fdd2b0]/60 hover:shadow-[0_0_60px_rgba(253,210,176,0.3)] hover:scale-[1.02] group overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Animated gradient background overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#fdd2b0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]"
      />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#fdd2b0] to-transparent opacity-40" />
      
      <div className="size-full relative z-10">
        <div className="content-stretch flex gap-[109px] items-start pb-[150px] pt-[48px] px-[50px] relative size-full">
          <Frame42 />
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <IconBackgroundImage />
            {/* Icon glow effect */}
            <div className="absolute inset-0 bg-[#fdd2b0] opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-opacity duration-500" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function Card12() {
  return (
    <motion.div 
      className="content-stretch flex flex-col items-start overflow-clip pb-0 pointer-events-auto pt-[100px] px-0 sticky top-0 w-[780px] relative" 
      data-name="card 5"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
    >
      {/* Gradient bar accent */}
      <motion.div 
        className="absolute left-[-50px] top-[110px] w-[3px] h-[100px] bg-gradient-to-b from-[#fdd2b0] to-transparent rounded-full"
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      {/* Glowing accent dot */}
      <motion.div 
        className="absolute left-[-56px] top-[100px] w-[15px] h-[15px] rounded-full bg-[#fdd2b0] shadow-[0_0_30px_12px_rgba(253,210,176,0.8)]"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.4, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
      />
      {/* Connecting line to card */}
      <motion.div 
        className="absolute left-[-40px] top-[105px] w-[40px] h-[2px] bg-gradient-to-r from-[#fdd2b0]/60 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.7 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      />
      <Frame43 />
    </motion.div>
  );
}

function ScrollCards() {
  return (
    <div className="h-[1423px] overflow-clip pointer-events-none relative shrink-0 w-full" data-name="scroll cards">
      {/* Vertical timeline accent line */}
      <div className="absolute left-[770px] top-[200px] bottom-[100px] w-[3px] bg-gradient-to-b from-transparent via-[#fdd2b0]/60 to-transparent rounded-full" />
      
      {/* Timeline nodes along the vertical line */}
      <motion.div 
        className="absolute left-[763px] top-[260px] w-[17px] h-[17px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#fdd2b0]" />
        <div className="absolute inset-[4px] rounded-full bg-[#fdd2b0]" />
      </motion.div>
      
      <motion.div 
        className="absolute left-[763px] top-[460px] w-[17px] h-[17px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#fdd2b0]" />
        <div className="absolute inset-[4px] rounded-full bg-[#fdd2b0]" />
      </motion.div>
      
      <motion.div 
        className="absolute left-[763px] top-[660px] w-[17px] h-[17px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#fdd2b0]" />
        <div className="absolute inset-[4px] rounded-full bg-[#fdd2b0]" />
      </motion.div>
      
      <motion.div 
        className="absolute left-[763px] top-[860px] w-[17px] h-[17px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#fdd2b0]" />
        <div className="absolute inset-[4px] rounded-full bg-[#fdd2b0]" />
      </motion.div>
      
      <div className="absolute bottom-0 h-[1253px] left-[801px] top-[170px]">
        <Card8 />
      </div>
      <div className="absolute bottom-0 h-[1053px] left-[801px] top-[370px]">
        <Card9 />
      </div>
      <div className="absolute bottom-0 h-[853px] left-[801px] top-[570px]">
        <Card10 />
      </div>
      <div className="absolute bottom-0 h-[853px] left-[801px] top-[770px] hidden">
        <Card11 />
      </div>
      <div className="absolute bottom-0 h-[653px] left-[801px] top-[770px]">
        <Card12 />
      </div>
    </div>
  );
}

function WhatWeDo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  
  // Scroll-driven parallax effect using ref (similar to QuoteSection)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    layoutEffect: false
  });
  
  // Transform scroll progress to Y movement with different speeds
  // Heading moves slower (0.35x speed) - 150px total range
  const whatWeDoHeadingY = useTransform(scrollYProgress, [0, 1], [0, -52.5]);
  // Text moves at medium speed (0.5x) - 150px total range
  const whatWeDoTextY = useTransform(scrollYProgress, [0, 1], [0, -75]);
  
  const services = [
    {
      id: 1,
      title: "BRAND IDENTITY",
      image: imgBrandIdentity,
      rotation: -8,
      width: 280,
      height: 360
    },
    {
      id: 2,
      title: "UI/UX DESIGN",
      image: imgUIUX,
      rotation: -3,
      width: 420,
      height: 340
    },
    {
      id: 3,
      title: "CREATIVE DESIGN",
      image: imgCreativeDesign,
      rotation: 5,
      width: 320,
      height: 440
    },
    {
      id: 4,
      title: "PITCH DECKS",
      image: imgPitchDeck,
      rotation: -6,
      width: 400,
      height: 400
    },
    {
      id: 5,
      title: "CONSULTATION",
      image: "https://images.unsplash.com/photo-1765020553734-2c050ddb9494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzY4ODU1NzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rotation: 3,
      width: 360,
      height: 380
    }
  ];

  return (
    <div ref={ref} className="absolute content-stretch flex flex-col h-[1100px] items-start left-0 overflow-visible pb-[60px] pt-[100px] px-0 top-[150px] w-[1924px]" style={{ backgroundImage: `url(${imgWhatWeDoBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} data-name="what we do">
      {/* Grain Texture Overlay for What We Do section */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
      
      {/* Header Section */}
      <div className="w-full px-[120px] mb-[60px] mt-[40px] text-center">
        {/* Section label pill */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#fdd2b0] animate-pulse" />
            <span className="text-[#fdd2b0] font-['Arimo',sans-serif] text-[13px] tracking-[0.15em] uppercase font-medium">Services</span>
          </div>
        </motion.div>

        <div className="relative inline-block">
          <motion.h2 
            className="text-white font-['Arimo',sans-serif] text-[80px] leading-[1.2] mb-4"
            style={{ y: whatWeDoHeadingY }}
          >
            What <span className="font-['Imperial_Script',cursive] mr-2">I</span> Do
          </motion.h2>
          {/* Animated underline accent */}
          <motion.img 
            src={imgUnderlineAccent}
            alt=""
            className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] h-auto w-[300px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          />
        </div>
        <motion.p 
          className="text-white/70 font-['Arimo',sans-serif] text-[18px] mt-6"
          style={{ y: whatWeDoTextY }}
        >
          Comprehensive design services tailored to elevate your brand
        </motion.p>
      </div>

      {/* Polaroid Cards */}
      <div className="w-full px-[120px] flex justify-center items-center gap-[-40px] pt-[100px] perspective-[2000px]" style={{ perspective: '2000px' }}>
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="relative group cursor-pointer"
            style={{
              zIndex: hoveredIndex === index ? 50 : 10 - index,
              marginLeft: index === 0 ? '0' : '-35px'
            }}
            initial={{ opacity: 0, y: 50, rotateY: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.15,
              type: "spring",
              stiffness: 100
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{
              y: -20,
              rotate: 0,
              scale: 1.05,
              transition: { 
                duration: 0.4,
                type: "spring",
                stiffness: 300
              }
            }}
          >
            {/* Polaroid-style Card */}
            <motion.div
              className="relative rounded-[16px] shadow-2xl overflow-hidden"
              style={{
                width: `${service.width}px`,
                height: `${service.height}px`,
                rotate: `${service.rotation}deg`,
                background: 'linear-gradient(180deg, rgba(240, 240, 240, 0.95) 0%, rgba(220, 220, 220, 0.95) 100%)',
                padding: '16px',
                boxShadow: hoveredIndex === index 
                  ? '0 40px 80px rgba(0, 0, 0, 0.8), 0 0 40px rgba(253, 210, 176, 0.3)'
                  : '0 20px 50px rgba(0, 0, 0, 0.6), 0 10px 20px rgba(0, 0, 0, 0.4)'
              }}
              animate={{
                rotate: hoveredIndex === index ? 0 : service.rotation
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Grain/Noise Texture Overlay */}
              <div 
                className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply z-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  backgroundSize: '200px 200px',
                  borderRadius: '16px'
                }}
              />
              
              {/* Image Container */}
              <div className="w-full rounded-[8px] overflow-hidden relative bg-black" style={{ height: 'calc(100% - 70px)' }}>
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  style={{
                    filter: hoveredIndex === index 
                      ? 'brightness(1.1) contrast(1.05) saturate(1.1)' 
                      : 'brightness(1.0) contrast(1.0) saturate(1.0)'
                  }}
                />
              </div>

              {/* Polaroid Bottom Label Area */}
              <div className="absolute bottom-[16px] left-[16px] right-[16px] h-[54px] flex items-center justify-center">
                <h3 
                  className="text-[#2a2a2a] font-['Arimo',sans-serif] text-[13px] font-bold tracking-[0.08em] uppercase m-0 text-center"
                  style={{
                    fontFamily: "'Arimo', sans-serif",
                    letterSpacing: '0.08em',
                    textShadow: 'none'
                  }}
                >
                  {service.title}
                </h3>
              </div>
            </motion.div>

            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 rounded-[16px] pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(253, 210, 176, 0.2), transparent 70%)',
                filter: 'blur(20px)',
                opacity: hoveredIndex === index ? 1 : 0,
              }}
              animate={{
                opacity: hoveredIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WhatWeDo1() {
  return (
    <div className="relative z-[16] flex items-start justify-center bg-[#0a0a0a] min-h-[1080px]">
      <div className="w-full max-w-[1920px]">
        <WhatWeDo />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id="projects" className="relative h-[4700px] w-full max-w-[1920px] mx-auto z-20 bg-[#0a0a0a] mt-[800px]" data-name="projects">
      {/* Grain Texture Overlay for Projects */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
      <StickyTop1 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[1241.023px] left-[20.47px] opacity-5 top-0 w-[1869.702px]">
      <div className="absolute inset-[0_-0.05%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1871 1242">
          <g id="Group 2">
            <line id="Line 8" stroke="var(--stroke-0, white)" x1="0.500043" x2="0.5" y1="2.78489e-08" y2="1241.02" />
            <line id="Line 11" stroke="var(--stroke-0, white)" x1="58.9288" x2="58.9288" y1="2.75394e-08" y2="1241.02" />
            <line id="Line 14" stroke="var(--stroke-0, white)" x1="117.358" x2="117.358" y1="2.91592e-08" y2="1241.02" />
            <line id="Line 17" stroke="var(--stroke-0, white)" x1="175.786" x2="175.786" y1="2.69994e-08" y2="1241.02" />
            <line id="Line 20" stroke="var(--stroke-0, white)" x1="234.213" x2="234.213" y1="2.85875e-08" y2="1241.02" />
            <line id="Line 23" stroke="var(--stroke-0, white)" x1="292.641" x2="292.641" y1="2.75394e-08" y2="1241.02" />
            <line id="Line 26" stroke="var(--stroke-0, white)" x1="351.07" x2="351.07" y1="2.69994e-08" y2="1241.02" />
            <line id="Line 29" stroke="var(--stroke-0, white)" x1="409.499" x2="409.499" y1="2.91592e-08" y2="1241.02" />
            <line id="Line 32" stroke="var(--stroke-0, white)" x1="467.925" x2="467.925" y1="2.69994e-08" y2="1241.02" />
            <line id="Line 35" stroke="var(--stroke-0, white)" x1="526.355" x2="526.355" y1="2.91592e-08" y2="1241.02" />
            <line id="Line 38" stroke="var(--stroke-0, white)" x1="584.783" x2="584.783" y1="2.69994e-08" y2="1241.02" />
            <line id="Line 41" stroke="var(--stroke-0, white)" x1="643.211" x2="643.211" y1="2.91592e-08" y2="1241.02" />
            <line id="Line 44" stroke="var(--stroke-0, white)" x1="701.64" x2="701.64" y1="2.69994e-08" y2="1241.02" />
            <line id="Line 47" stroke="var(--stroke-0, white)" x1="760.066" x2="760.066" y1="2.91592e-08" y2="1241.02" />
            <line id="Line 50" stroke="var(--stroke-0, white)" x1="818.496" x2="818.496" y1="2.85875e-08" y2="1241.02" />
            <line id="Line 53" stroke="var(--stroke-0, white)" x1="876.923" x2="876.923" y1="2.75394e-08" y2="1241.02" />
            <line id="Line 56" stroke="var(--stroke-0, white)" x1="935.352" x2="935.352" y1="2.85875e-08" y2="1241.02" />
            <line id="Line 59" stroke="var(--stroke-0, white)" x1="993.779" x2="993.779" y1="2.69994e-08" y2="1241.02" />
            <line id="Line 62" stroke="var(--stroke-0, white)" x1="1052.21" x2="1052.21" y1="2.85857e-08" y2="1241.02" />
            <line id="Line 65" stroke="var(--stroke-0, white)" x1="1110.64" x2="1110.64" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 68" stroke="var(--stroke-0, white)" x1="1169.06" x2="1169.06" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 71" stroke="var(--stroke-0, white)" x1="1227.49" x2="1227.49" y1="2.85857e-08" y2="1241.02" />
            <line id="Line 74" stroke="var(--stroke-0, white)" x1="1285.92" x2="1285.92" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 77" stroke="var(--stroke-0, white)" x1="1344.35" x2="1344.35" y1="2.85857e-08" y2="1241.02" />
            <line id="Line 80" stroke="var(--stroke-0, white)" x1="1402.78" x2="1402.78" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 83" stroke="var(--stroke-0, white)" x1="1461.2" x2="1461.2" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 86" stroke="var(--stroke-0, white)" x1="1519.63" x2="1519.63" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 89" stroke="var(--stroke-0, white)" x1="1578.06" x2="1578.06" y1="2.85857e-08" y2="1241.02" />
            <line id="Line 92" stroke="var(--stroke-0, white)" x1="1636.49" x2="1636.49" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 95" stroke="var(--stroke-0, white)" x1="1694.92" x2="1694.92" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 98" stroke="var(--stroke-0, white)" x1="1753.35" x2="1753.35" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 101" stroke="var(--stroke-0, white)" x1="1811.77" x2="1811.77" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 9" stroke="var(--stroke-0, white)" x1="19.977" x2="19.9769" y1="2.69994e-08" y2="1241.02" />
            <line id="Line 12" stroke="var(--stroke-0, white)" x1="78.4058" x2="78.4057" y1="2.75394e-08" y2="1241.02" />
            <line id="Line 15" stroke="var(--stroke-0, white)" x1="136.833" x2="136.833" y1="2.85875e-08" y2="1241.02" />
            <line id="Line 18" stroke="var(--stroke-0, white)" x1="195.26" x2="195.26" y1="2.75394e-08" y2="1241.02" />
            <line id="Line 21" stroke="var(--stroke-0, white)" x1="253.689" x2="253.689" y1="2.85875e-08" y2="1241.02" />
            <line id="Line 24" stroke="var(--stroke-0, white)" x1="312.118" x2="312.118" y1="2.75394e-08" y2="1241.02" />
            <line id="Line 27" stroke="var(--stroke-0, white)" x1="370.548" x2="370.548" y1="2.85875e-08" y2="1241.02" />
            <line id="Line 30" stroke="var(--stroke-0, white)" x1="428.974" x2="428.974" y1="2.75394e-08" y2="1241.02" />
            <line id="Line 33" stroke="var(--stroke-0, white)" x1="487.402" x2="487.402" y1="2.85875e-08" y2="1241.02" />
            <line id="Line 36" stroke="var(--stroke-0, white)" x1="545.831" x2="545.831" y1="2.91592e-08" y2="1241.02" />
            <line id="Line 39" stroke="var(--stroke-0, white)" x1="604.259" x2="604.259" y1="2.69994e-08" y2="1241.02" />
            <line id="Line 42" stroke="var(--stroke-0, white)" x1="662.686" x2="662.686" y1="2.85875e-08" y2="1241.02" />
            <line id="Line 45" stroke="var(--stroke-0, white)" x1="721.116" x2="721.116" y1="2.69994e-08" y2="1241.02" />
            <line id="Line 48" stroke="var(--stroke-0, white)" x1="779.542" x2="779.542" y1="2.85875e-08" y2="1241.02" />
            <line id="Line 51" stroke="var(--stroke-0, white)" x1="837.972" x2="837.972" y1="2.69994e-08" y2="1241.02" />
            <line id="Line 54" stroke="var(--stroke-0, white)" x1="896.399" x2="896.399" y1="2.85875e-08" y2="1241.02" />
            <line id="Line 57" stroke="var(--stroke-0, white)" x1="954.829" x2="954.828" y1="2.85875e-08" y2="1241.02" />
            <line id="Line 60" stroke="var(--stroke-0, white)" x1="1013.26" x2="1013.26" y1="2.69994e-08" y2="1241.02" />
            <line id="Line 63" stroke="var(--stroke-0, white)" x1="1071.68" x2="1071.68" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 66" stroke="var(--stroke-0, white)" x1="1130.11" x2="1130.11" y1="2.85857e-08" y2="1241.02" />
            <line id="Line 69" stroke="var(--stroke-0, white)" x1="1188.54" x2="1188.54" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 72" stroke="var(--stroke-0, white)" x1="1246.97" x2="1246.97" y1="2.85857e-08" y2="1241.02" />
            <line id="Line 75" stroke="var(--stroke-0, white)" x1="1305.4" x2="1305.4" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 78" stroke="var(--stroke-0, white)" x1="1363.83" x2="1363.83" y1="2.85857e-08" y2="1241.02" />
            <line id="Line 81" stroke="var(--stroke-0, white)" x1="1422.25" x2="1422.25" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 84" stroke="var(--stroke-0, white)" x1="1480.68" x2="1480.68" y1="2.85857e-08" y2="1241.02" />
            <line id="Line 87" stroke="var(--stroke-0, white)" x1="1539.11" x2="1539.11" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 90" stroke="var(--stroke-0, white)" x1="1597.54" x2="1597.54" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 93" stroke="var(--stroke-0, white)" x1="1655.97" x2="1655.97" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 96" stroke="var(--stroke-0, white)" x1="1714.39" x2="1714.39" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 99" stroke="var(--stroke-0, white)" x1="1772.82" x2="1772.82" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 102" stroke="var(--stroke-0, white)" x1="1831.25" x2="1831.25" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 10" stroke="var(--stroke-0, white)" x1="39.4539" x2="39.4539" y1="2.69994e-08" y2="1241.02" />
            <line id="Line 13" stroke="var(--stroke-0, white)" x1="97.8807" x2="97.8807" y1="2.91592e-08" y2="1241.02" />
            <line id="Line 16" stroke="var(--stroke-0, white)" x1="156.309" x2="156.309" y1="2.69994e-08" y2="1241.02" />
            <line id="Line 19" stroke="var(--stroke-0, white)" x1="214.737" x2="214.737" y1="2.75394e-08" y2="1241.02" />
            <line id="Line 22" stroke="var(--stroke-0, white)" x1="273.167" x2="273.167" y1="2.85875e-08" y2="1241.02" />
            <line id="Line 25" stroke="var(--stroke-0, white)" x1="331.593" x2="331.593" y1="2.69994e-08" y2="1241.02" />
            <line id="Line 28" stroke="var(--stroke-0, white)" x1="390.022" x2="390.022" y1="2.91592e-08" y2="1241.02" />
            <line id="Line 31" stroke="var(--stroke-0, white)" x1="448.451" x2="448.451" y1="2.75394e-08" y2="1241.02" />
            <line id="Line 34" stroke="var(--stroke-0, white)" x1="506.878" x2="506.878" y1="2.91592e-08" y2="1241.02" />
            <line id="Line 37" stroke="var(--stroke-0, white)" x1="565.306" x2="565.306" y1="2.69994e-08" y2="1241.02" />
            <line id="Line 40" stroke="var(--stroke-0, white)" x1="623.735" x2="623.735" y1="2.91592e-08" y2="1241.02" />
            <line id="Line 43" stroke="var(--stroke-0, white)" x1="682.163" x2="682.162" y1="2.85875e-08" y2="1241.02" />
            <line id="Line 46" stroke="var(--stroke-0, white)" x1="740.59" x2="740.59" y1="2.75394e-08" y2="1241.02" />
            <line id="Line 49" stroke="var(--stroke-0, white)" x1="799.019" x2="799.019" y1="2.85875e-08" y2="1241.02" />
            <line id="Line 52" stroke="var(--stroke-0, white)" x1="857.446" x2="857.446" y1="2.75394e-08" y2="1241.02" />
            <line id="Line 55" stroke="var(--stroke-0, white)" x1="915.876" x2="915.876" y1="2.85875e-08" y2="1241.02" />
            <line id="Line 58" stroke="var(--stroke-0, white)" x1="974.304" x2="974.304" y1="2.75394e-08" y2="1241.02" />
            <line id="Line 61" stroke="var(--stroke-0, white)" x1="1032.73" x2="1032.73" y1="2.85857e-08" y2="1241.02" />
            <line id="Line 64" stroke="var(--stroke-0, white)" x1="1091.16" x2="1091.16" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 67" stroke="var(--stroke-0, white)" x1="1149.59" x2="1149.59" y1="2.85857e-08" y2="1241.02" />
            <line id="Line 70" stroke="var(--stroke-0, white)" x1="1208.02" x2="1208.02" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 73" stroke="var(--stroke-0, white)" x1="1266.44" x2="1266.44" y1="2.85857e-08" y2="1241.02" />
            <line id="Line 76" stroke="var(--stroke-0, white)" x1="1324.87" x2="1324.87" y1="2.85857e-08" y2="1241.02" />
            <line id="Line 79" stroke="var(--stroke-0, white)" x1="1383.3" x2="1383.3" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 82" stroke="var(--stroke-0, white)" x1="1441.73" x2="1441.73" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 85" stroke="var(--stroke-0, white)" x1="1500.16" x2="1500.16" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 88" stroke="var(--stroke-0, white)" x1="1558.59" x2="1558.59" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 91" stroke="var(--stroke-0, white)" x1="1617.01" x2="1617.01" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 94" stroke="var(--stroke-0, white)" x1="1675.44" x2="1675.44" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 97" stroke="var(--stroke-0, white)" x1="1733.87" x2="1733.87" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 100" stroke="var(--stroke-0, white)" x1="1792.3" x2="1792.3" y1="2.85857e-08" y2="1241.02" />
            <line id="Line 103" stroke="var(--stroke-0, white)" x1="1850.73" x2="1850.73" y1="2.91574e-08" y2="1241.02" />
            <line id="Line 104" stroke="var(--stroke-0, white)" x1="1870.2" x2="1870.2" y1="2.91574e-08" y2="1241.02" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute h-[1203.662px] left-px opacity-5 top-[22.74px] w-[1917px]">
      <div className="absolute inset-[-0.08%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1917 1205">
          <g id="Group 3">
            <line id="Line 105" stroke="var(--stroke-0, white)" x1="1.39107" x2="1917" y1="0.5" y2="0.5" />
            <line id="Line 106" stroke="var(--stroke-0, white)" x1="1.39107" x2="1917" y1="21.6176" y2="21.6176" />
            <line id="Line 107" stroke="var(--stroke-0, white)" x2="1915.61" y1="42.7332" y2="42.7332" />
            <line id="Line 108" stroke="var(--stroke-0, white)" x2="1915.61" y1="63.8488" y2="63.8488" />
            <line id="Line 109" stroke="var(--stroke-0, white)" x2="1915.61" y1="84.9654" y2="84.9654" />
            <line id="Line 110" stroke="var(--stroke-0, white)" x2="1915.61" y1="106.083" y2="106.083" />
            <line id="Line 111" stroke="var(--stroke-0, white)" x2="1915.61" y1="127.2" y2="127.2" />
            <line id="Line 112" stroke="var(--stroke-0, white)" x2="1915.61" y1="148.318" y2="148.318" />
            <line id="Line 113" stroke="var(--stroke-0, white)" x2="1915.61" y1="169.436" y2="169.436" />
            <line id="Line 114" stroke="var(--stroke-0, white)" x2="1915.61" y1="190.55" y2="190.55" />
            <line id="Line 115" stroke="var(--stroke-0, white)" x2="1915.61" y1="211.667" y2="211.667" />
            <line id="Line 116" stroke="var(--stroke-0, white)" x2="1915.61" y1="232.786" y2="232.786" />
            <line id="Line 117" stroke="var(--stroke-0, white)" x2="1915.61" y1="253.901" y2="253.901" />
            <line id="Line 118" stroke="var(--stroke-0, white)" x2="1915.61" y1="275.019" y2="275.019" />
            <line id="Line 119" stroke="var(--stroke-0, white)" x2="1915.61" y1="296.135" y2="296.135" />
            <line id="Line 120" stroke="var(--stroke-0, white)" x2="1915.61" y1="317.253" y2="317.253" />
            <line id="Line 121" stroke="var(--stroke-0, white)" x2="1915.61" y1="338.37" y2="338.37" />
            <line id="Line 122" stroke="var(--stroke-0, white)" x2="1915.61" y1="359.485" y2="359.485" />
            <line id="Line 123" stroke="var(--stroke-0, white)" x2="1915.61" y1="380.603" y2="380.603" />
            <line id="Line 124" stroke="var(--stroke-0, white)" x2="1915.61" y1="401.721" y2="401.721" />
            <line id="Line 125" stroke="var(--stroke-0, white)" x2="1915.61" y1="422.838" y2="422.838" />
            <line id="Line 126" stroke="var(--stroke-0, white)" x2="1915.61" y1="443.952" y2="443.952" />
            <line id="Line 127" stroke="var(--stroke-0, white)" x2="1915.61" y1="465.07" y2="465.07" />
            <line id="Line 128" stroke="var(--stroke-0, white)" x2="1915.61" y1="486.189" y2="486.189" />
            <line id="Line 129" stroke="var(--stroke-0, white)" x2="1915.61" y1="507.305" y2="507.305" />
            <line id="Line 130" stroke="var(--stroke-0, white)" x2="1915.61" y1="528.421" y2="528.421" />
            <line id="Line 131" stroke="var(--stroke-0, white)" x2="1915.61" y1="549.536" y2="549.536" />
            <line id="Line 132" stroke="var(--stroke-0, white)" x2="1915.61" y1="570.655" y2="570.655" />
            <line id="Line 133" stroke="var(--stroke-0, white)" x2="1915.61" y1="591.773" y2="591.773" />
            <line id="Line 134" stroke="var(--stroke-0, white)" x2="1915.61" y1="612.889" y2="612.889" />
            <line id="Line 135" stroke="var(--stroke-0, white)" x2="1915.61" y1="634.006" y2="634.006" />
            <line id="Line 136" stroke="var(--stroke-0, white)" x2="1915.61" y1="655.124" y2="655.123" />
            <line id="Line 137" stroke="var(--stroke-0, white)" x2="1915.61" y1="676.238" y2="676.238" />
            <line id="Line 138" stroke="var(--stroke-0, white)" x2="1915.61" y1="697.356" y2="697.356" />
            <line id="Line 139" stroke="var(--stroke-0, white)" x2="1915.61" y1="718.472" y2="718.472" />
            <line id="Line 140" stroke="var(--stroke-0, white)" x2="1915.61" y1="739.591" y2="739.591" />
            <line id="Line 141" stroke="var(--stroke-0, white)" x2="1915.61" y1="760.708" y2="760.708" />
            <line id="Line 142" stroke="var(--stroke-0, white)" x2="1915.61" y1="781.825" y2="781.825" />
            <line id="Line 143" stroke="var(--stroke-0, white)" x2="1915.61" y1="802.941" y2="802.941" />
            <line id="Line 144" stroke="var(--stroke-0, white)" x2="1915.61" y1="824.058" y2="824.058" />
            <line id="Line 145" stroke="var(--stroke-0, white)" x2="1915.61" y1="845.174" y2="845.174" />
            <line id="Line 146" stroke="var(--stroke-0, white)" x2="1915.61" y1="866.29" y2="866.29" />
            <line id="Line 147" stroke="var(--stroke-0, white)" x2="1915.61" y1="887.408" y2="887.408" />
            <line id="Line 148" stroke="var(--stroke-0, white)" x2="1915.61" y1="908.526" y2="908.526" />
            <line id="Line 149" stroke="var(--stroke-0, white)" x2="1915.61" y1="929.642" y2="929.642" />
            <line id="Line 150" stroke="var(--stroke-0, white)" x2="1915.61" y1="950.76" y2="950.76" />
            <line id="Line 151" stroke="var(--stroke-0, white)" x2="1915.61" y1="971.875" y2="971.875" />
            <line id="Line 152" stroke="var(--stroke-0, white)" x2="1915.61" y1="992.994" y2="992.994" />
            <line id="Line 153" stroke="var(--stroke-0, white)" x2="1915.61" y1="1014.11" y2="1014.11" />
            <line id="Line 154" stroke="var(--stroke-0, white)" x2="1915.61" y1="1035.23" y2="1035.23" />
            <line id="Line 155" stroke="var(--stroke-0, white)" x2="1915.61" y1="1056.34" y2="1056.34" />
            <line id="Line 156" stroke="var(--stroke-0, white)" x2="1915.61" y1="1077.46" y2="1077.46" />
            <line id="Line 157" stroke="var(--stroke-0, white)" x2="1915.61" y1="1098.58" y2="1098.58" />
            <line id="Line 158" stroke="var(--stroke-0, white)" x2="1915.61" y1="1119.69" y2="1119.69" />
            <line id="Line 159" stroke="var(--stroke-0, white)" x2="1915.61" y1="1140.81" y2="1140.81" />
            <line id="Line 160" stroke="var(--stroke-0, white)" x2="1915.61" y1="1161.93" y2="1161.93" />
            <line id="Line 161" stroke="var(--stroke-0, white)" x2="1915.61" y1="1183.05" y2="1183.05" />
            <line id="Line 162" stroke="var(--stroke-0, white)" x2="1915.61" y1="1204.16" y2="1204.16" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function BgLines1() {
  return (
    <div className="absolute contents left-px top-0" data-name="bg lines 2">
      <Group2 />
      <Group3 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[719px] top-[200px]" data-name="Mask group">
      <div className="absolute h-[1057.152px] left-[69.88px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[649.121px_238.18px] mask-size-[479.289px_162.665px] top-[20px] w-[1879.381px] floating-image" data-name="5 2" style={{ maskImage: `url('${img52}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img53} />
        {/* Golden glow spotlight effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 40%, rgba(253,210,176,0.2) 0%, rgba(253,210,176,0.1) 30%, transparent 60%)'
          }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

function FooterContent() {
  return (
    <div className="hidden capitalize font-['Delight:Light',sans-serif] font-light gap-y-[10px] gap-x-[471px] grid grid-cols-[repeat(2,_fit-content(100%))] grid-rows-[repeat(3,_fit-content(100%))] leading-[1.1] relative shrink-0 text-[#fbe1c4] text-[16px] tracking-[0.64px] w-[958px]" data-name="footer content">
      <motion.p 
        className="[grid-area:1_/_1] h-[22.667px] relative shrink-0 w-[110px] cursor-pointer transition-all duration-300 hover:text-[#fdd2b0]"
        whileHover={{ 
          textShadow: "0 0 15px rgba(253,210,176,0.8)",
          x: 5
        }}
      >
        About Us
      </motion.p>
      <motion.p 
        className="[grid-area:1_/_2] h-[22.667px] relative shrink-0 w-[328px] cursor-pointer transition-all duration-300 hover:text-[#fdd2b0]"
        whileHover={{ 
          textShadow: "0 0 15px rgba(253,210,176,0.8)"
        }}
      >
        nikhilreddypuli@gmail.com
      </motion.p>
      <motion.p 
        className="[grid-area:2_/_1] h-[22.667px] relative shrink-0 w-[153px] cursor-pointer transition-all duration-300 hover:text-[#fdd2b0]"
        whileHover={{ 
          textShadow: "0 0 15px rgba(253,210,176,0.8)",
          x: 5
        }}
      >
        Our Services
      </motion.p>
      <motion.p 
        className="[grid-area:2_/_2] h-[22.667px] relative shrink-0 w-[208px] cursor-pointer transition-all duration-300 hover:text-[#fdd2b0]"
        whileHover={{ 
          textShadow: "0 0 15px rgba(253,210,176,0.8)"
        }}
      >
        +91 9884725629
      </motion.p>
      <motion.p 
        className="[grid-area:3_/_1] h-[22.667px] relative shrink-0 w-[159px] cursor-pointer transition-all duration-300 hover:text-[#fdd2b0]"
        whileHover={{ 
          textShadow: "0 0 15px rgba(253,210,176,0.8)",
          x: 5
        }}
      >
        Our Work
      </motion.p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[434px] items-start left-[calc(50%+19.5px)] top-[440px] translate-x-[-50%] w-[859px]">
      <motion.p 
        className="hidden capitalize font-['Delight:Extra_Bold',sans-serif] font-extrabold h-[170px] leading-[1.5] relative shrink-0 text-[#fbe1c4] text-[120px] tracking-[4.8px] w-[958px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        CONTACT US
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <FooterContent />
      </motion.div>
    </div>
  );
}

function OldFooterComponentRemoved() {
  const [currentTime, setCurrentTime] = useState('');
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      const displayMinutes = minutes.toString().padStart(2, '0');
      setCurrentTime(`CHENNAI ${displayHours}:${displayMinutes} ${ampm}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute contents left-0 top-0" data-name="footer">
      <div className="absolute bg-[#0a0a0a] h-[850px] left-0 top-0 w-full" />
      
      {/* Grain Texture Overlay for Footer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] h-[850px] w-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
      
      <BgLines1 />
      <motion.div 
        className="absolute capitalize font-['Delight:Light',sans-serif] font-light h-[60.299px] leading-[1.5] left-[450px] text-[#fbe1c4] text-[16px] top-[260px] tracking-[0.64px] w-[245.668px]"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="mb-0">“Your growth starts with</p>
        <p>{` a clear brand.”`}</p>
      </motion.div>
      <div className="absolute blur-[5px] filter h-[1024px] left-[96px] top-[137px] w-[1822px] hidden" data-name="5 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img53} />
      </div>
      <MaskGroup />
      <Frame38 />
      
      {/* Large typography footer section inspired by portfolio style */}
      <motion.div 
        id="footer"
        className="absolute left-[80px] right-[80px] bottom-[80px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Main large text - CleanSheet */}
        <div className="mb-[48px]">
          <div className="flex items-baseline gap-[12px]">
            <motion.h1 
              className="font-['Arimo',sans-serif] font-bold text-[312px] leading-[0.85] text-white tracking-[-0.02em]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Clean
            </motion.h1>
            <motion.h1 
              className="font-['Arimo',sans-serif] font-normal text-[312px] leading-[0.85] text-white tracking-[-0.02em]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              Sheet
            </motion.h1>
          </div>
        </div>
        
        {/* Divider line with proper visibility */}
        <motion.div 
          className="relative w-full h-[1px] bg-white mb-[28px]"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
        
        {/* Bottom row - Contact info with proper spacing and hierarchy */}
        <motion.div 
          className="flex justify-between items-start text-[15px] uppercase tracking-[0.08em]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          {/* Left: Email */}
          <div className="flex flex-col">
            <a 
              href="mailto:work.with.cleansheet@gmail.com"
              className="text-white font-['Arimo',sans-serif] font-medium hover:text-[#fdd2b0] transition-colors duration-300"
            >
              work.with.cleansheet@gmail.com
            </a>
          </div>
          
          {/* Right: Social links */}
          <div className="flex gap-[48px]">
            <motion.a 
              href="#" 
              className="text-white font-['Arimo',sans-serif] font-medium hover:text-[#fdd2b0] transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              INSTAGRAM
            </motion.a>
            <motion.a 
              href="https://www.behance.net/cleansheet_studio" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-['Arimo',sans-serif] font-medium hover:text-[#fdd2b0] transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              BEHANCE
            </motion.a>
            <motion.a 
              href="https://linkedin.com/company/cleansheet-studio" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-['Arimo',sans-serif] font-medium hover:text-[#fdd2b0] transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              LINKEDIN
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function Button() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.05)] content-stretch flex h-[54px] items-center ml-[460px] mt-[83px] px-[24px] py-[15px] relative rounded-bl-[32px] rounded-tl-[32px] w-[391px] transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(251,225,196,0.3)] border-solid inset-0 pointer-events-none rounded-bl-[32px] rounded-tl-[32px] transition-all duration-300 group-hover:border-[rgba(251,225,196,0.5)] group-hover:shadow-[0_0_15px_rgba(251,225,196,0.2)]" />
      <input 
        type="email"
        placeholder="Enter your email id"
        className="bg-transparent border-none outline-none font-['Arimo',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#fbe1c4] text-[18px] text-left w-full placeholder:text-[#75808a] placeholder:lowercase placeholder:first-letter:capitalize"
      />
    </div>
  );
}

function Text() {
  return (
    <motion.div 
      className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[53px] mt-[99px] relative w-[376px]" 
      data-name="Text"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      <p className="font-['Arimo',sans-serif] font-light leading-[1.28] not-italic relative shrink-0 text-[22px] text-white tracking-[-0.88px] w-full">
        Give your brand the <span className="text-[#fdd2b0] font-normal">clarity</span> it deserves.
      </p>
    </motion.div>
  );
}

function Button1() {
  return (
    <motion.div 
      className="[grid-area:1_/_1] bg-[#fbe1c4] content-stretch flex items-center justify-center ml-[850px] mt-[83px] px-[32px] py-[22px] relative rounded-br-[32px] rounded-tr-[32px] w-[205.66px] cursor-pointer overflow-hidden" 
      data-name="Button"
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 30px rgba(251,225,196,0.8), 0 5px 20px rgba(0,0,0,0.3)'
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {/* Animated shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
        whileHover={{ 
          opacity: [0, 0.3, 0],
          x: ['-100%', '200%']
        }}
        transition={{ duration: 0.6 }}
      />
      <p className="font-['Arimo',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[-0.56px] z-10">
        Let's Connect
      </p>
    </motion.div>
  );
}

function CallToAction() {
  return (
    <motion.div 
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 group" 
      data-name="Call To Action"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Luxury gradient background with animated border glow */}
      <motion.div 
        className="[grid-area:1_/_1] h-[220px] ml-0 mt-0 rounded-[32px] w-[1130px] relative overflow-hidden"
        data-name="Backgrond"
        style={{
          background: 'linear-gradient(135deg, rgba(13,21,31,0.95) 0%, rgba(25,35,50,0.95) 50%, rgba(13,21,31,0.95) 100%)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
        }}
        whileHover={{
          boxShadow: '0 15px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.15), 0 0 30px rgba(251,225,196,0.3)'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated golden border */}
        <div className="absolute inset-0 rounded-[32px] p-[2px]" style={{
          background: 'linear-gradient(135deg, #fbe1c4, #fdd2b0, #fbe1c4)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}>
          <motion.div 
            className="absolute inset-0 rounded-[32px]"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(251,225,196,0.8), transparent)',
            }}
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-[20px] left-[50px] w-[6px] h-[6px] rounded-full bg-[#fdd2b0]"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ boxShadow: '0 0 15px rgba(253,210,176,0.8)' }}
        />
        <motion.div
          className="absolute top-[60px] right-[80px] w-[5px] h-[5px] rounded-full bg-[#fdd2b0]"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.9, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          style={{ boxShadow: '0 0 12px rgba(253,210,176,0.6)' }}
        />
        <motion.div
          className="absolute bottom-[30px] left-[200px] w-[4px] h-[4px] rounded-full bg-[#fdd2b0]"
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          style={{ boxShadow: '0 0 10px rgba(253,210,176,0.7)' }}
        />
      </motion.div>
      
      <Button />
      <Text />
      <Button1 />
    </motion.div>
  );
}

function ContactUsFrame() {
  return (
    <div className="hidden bg-[#0a0a0a] content-stretch flex flex-col h-[395px] items-center justify-center p-[70px] pointer-events-auto sticky top-0 translate-x-[-50%] w-[1920px]" data-name="contact us frame">
      <CallToAction />
    </div>
  );
}

function ContactUs() {
  return (
    <div id="contact" className="hidden relative h-[395px] w-full max-w-[1920px] mx-auto bg-[#0a0a0a]" data-name="contact us">
      {/* Grain Texture Overlay for Contact Us */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
      <div className="absolute bottom-0 h-[395px] left-1/2 pointer-events-none top-0">
        <ContactUsFrame />
      </div>
    </div>
  );
}

function BackgroundFiller() {
  return (
    <div className="hidden relative bg-[#0a0a0a] h-[200px] w-full max-w-[1920px] mx-auto" data-name="background filler" />
  );
}



export default function Desktop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Scroll progress and back to top button logic
  const { scrollY } = useScroll({ layoutEffect: false });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const trackLength = documentHeight - windowHeight;
      const progress = (scrollTop / trackLength) * 100;
      setScrollProgress(progress);
      
      // Show back to top button after scrolling 300px
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative w-full flex flex-col bg-[#0a0a0a]" data-name="Desktop - 6">
      {/* Grain Texture Overlay - Applied globally */}
      <div 
        className="fixed inset-0 pointer-events-none z-[100] opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
      
      {/* Scroll anchor for hero section */}
      <div id="hero" className="absolute top-0 left-0 w-full h-0" />
      
      {/* Website Border - FIXED to viewport */}
      <div 
        className="fixed left-[50%] top-0 w-[1920px] h-[1080px] border border-[#F6F6F6] pointer-events-none z-[9998] -translate-x-1/2"
        style={{ boxSizing: 'border-box' }}
      />
      
      {/* Enhanced Scroll Progress Bar with Glowing Gradient */}
      <motion.div 
        className="fixed top-0 left-0 h-[3px] z-[200] pointer-events-none"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #fdd2b0 0%, #fbe1c4 50%, #FFEFDD 100%)',
          boxShadow: '0 0 20px rgba(251, 225, 196, 0.8), 0 0 40px rgba(253, 210, 176, 0.4)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed w-[50px] h-[50px] rounded-full bg-[#c0c0c0] flex items-center justify-center cursor-pointer overflow-hidden group border border-[#d4d4d4]/30"
            style={{
              bottom: '100px',
              right: '80px',
              zIndex: 9999
            }}
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 30px rgba(212, 212, 212, 0.6), 0 5px 20px rgba(192, 192, 192, 0.4), 0 0 60px rgba(212, 212, 212, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {/* Shine effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              initial={{ x: '-100%' }}
              whileHover={{ 
                opacity: [0, 0.4, 0],
                x: ['100%', '200%']
              }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Pulsing glow ring */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-[#d4d4d4]"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <ArrowUp className="w-5 h-5 text-[#0a0a0a] relative z-10" strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
      
      <Hero />
      <Navbar />
      <Intention />
      <Projects />
      <WhatWeDo1 />
      <Quote1 />
      <div className="relative z-[18]">
        <Footer />
      </div>
    </div>
  );
}
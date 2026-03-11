import { motion } from "motion/react";
import { useState, useEffect } from "react";
import img53 from "figma:asset/d2d476e3d14bf0e2d06a5c3e76d7908ce247e458.png";
import { img52 } from "../imports/svg-f322f";

export function Footer() {
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
    <div className="relative bg-[#0a0a0a] w-full lg:min-w-[1920px] lg:h-[1080px] min-h-[600px] overflow-hidden flex items-center" data-name="footer">
      {/* Background grid lines - Vertical lines (Group2) - Extended to full width - Desktop only */}
      <div className="desktop-only absolute h-[1241.023px] left-0 opacity-5 top-0 w-full pointer-events-none">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 1242">
            <line stroke="white" x1="0.5" x2="0.5" y1="0" y2="1241.02" />
            <line stroke="white" x1="19.977" x2="19.977" y1="0" y2="1241.02" />
            <line stroke="white" x1="39.454" x2="39.454" y1="0" y2="1241.02" />
            <line stroke="white" x1="58.429" x2="58.429" y1="0" y2="1241.02" />
            <line stroke="white" x1="78.406" x2="78.406" y1="0" y2="1241.02" />
            <line stroke="white" x1="97.881" x2="97.881" y1="0" y2="1241.02" />
            <line stroke="white" x1="116.858" x2="116.858" y1="0" y2="1241.02" />
            <line stroke="white" x1="136.833" x2="136.833" y1="0" y2="1241.02" />
            <line stroke="white" x1="156.309" x2="156.309" y1="0" y2="1241.02" />
            <line stroke="white" x1="175.786" x2="175.786" y1="0" y2="1241.02" />
            <line stroke="white" x1="195.26" x2="195.26" y1="0" y2="1241.02" />
            <line stroke="white" x1="214.737" x2="214.737" y1="0" y2="1241.02" />
            <line stroke="white" x1="234.212" x2="234.212" y1="0" y2="1241.02" />
            <line stroke="white" x1="253.689" x2="253.689" y1="0" y2="1241.02" />
            <line stroke="white" x1="273.167" x2="273.167" y1="0" y2="1241.02" />
            <line stroke="white" x1="292.641" x2="292.641" y1="0" y2="1241.02" />
            <line stroke="white" x1="312.118" x2="312.118" y1="0" y2="1241.02" />
            <line stroke="white" x1="331.593" x2="331.593" y1="0" y2="1241.02" />
            <line stroke="white" x1="351.071" x2="351.071" y1="0" y2="1241.02" />
            <line stroke="white" x1="370.548" x2="370.548" y1="0" y2="1241.02" />
            <line stroke="white" x1="390.022" x2="390.022" y1="0" y2="1241.02" />
            <line stroke="white" x1="409.499" x2="409.499" y1="0" y2="1241.02" />
            <line stroke="white" x1="428.974" x2="428.974" y1="0" y2="1241.02" />
            <line stroke="white" x1="448.451" x2="448.451" y1="0" y2="1241.02" />
            <line stroke="white" x1="467.926" x2="467.926" y1="0" y2="1241.02" />
            <line stroke="white" x1="487.402" x2="487.402" y1="0" y2="1241.02" />
            <line stroke="white" x1="506.878" x2="506.878" y1="0" y2="1241.02" />
            <line stroke="white" x1="526.355" x2="526.355" y1="0" y2="1241.02" />
            <line stroke="white" x1="545.831" x2="545.831" y1="0" y2="1241.02" />
            <line stroke="white" x1="565.306" x2="565.306" y1="0" y2="1241.02" />
            <line stroke="white" x1="584.783" x2="584.783" y1="0" y2="1241.02" />
            <line stroke="white" x1="604.259" x2="604.259" y1="0" y2="1241.02" />
            <line stroke="white" x1="623.735" x2="623.735" y1="0" y2="1241.02" />
            <line stroke="white" x1="643.21" x2="643.21" y1="0" y2="1241.02" />
            <line stroke="white" x1="662.686" x2="662.686" y1="0" y2="1241.02" />
            <line stroke="white" x1="682.163" x2="682.163" y1="0" y2="1241.02" />
            <line stroke="white" x1="701.639" x2="701.639" y1="0" y2="1241.02" />
            <line stroke="white" x1="721.116" x2="721.116" y1="0" y2="1241.02" />
            <line stroke="white" x1="740.59" x2="740.59" y1="0" y2="1241.02" />
            <line stroke="white" x1="760.068" x2="760.068" y1="0" y2="1241.02" />
            <line stroke="white" x1="779.542" x2="779.542" y1="0" y2="1241.02" />
            <line stroke="white" x1="799.019" x2="799.019" y1="0" y2="1241.02" />
            <line stroke="white" x1="818.495" x2="818.495" y1="0" y2="1241.02" />
            <line stroke="white" x1="837.972" x2="837.972" y1="0" y2="1241.02" />
            <line stroke="white" x1="857.446" x2="857.446" y1="0" y2="1241.02" />
            <line stroke="white" x1="876.923" x2="876.923" y1="0" y2="1241.02" />
            <line stroke="white" x1="896.399" x2="896.399" y1="0" y2="1241.02" />
            <line stroke="white" x1="915.876" x2="915.876" y1="0" y2="1241.02" />
            <line stroke="white" x1="935.352" x2="935.352" y1="0" y2="1241.02" />
            <line stroke="white" x1="954.829" x2="954.829" y1="0" y2="1241.02" />
            <line stroke="white" x1="974.304" x2="974.304" y1="0" y2="1241.02" />
            <line stroke="white" x1="993.78" x2="993.78" y1="0" y2="1241.02" />
            <line stroke="white" x1="1013.26" x2="1013.26" y1="0" y2="1241.02" />
            <line stroke="white" x1="1032.73" x2="1032.73" y1="0" y2="1241.02" />
            <line stroke="white" x1="1052.21" x2="1052.21" y1="0" y2="1241.02" />
            <line stroke="white" x1="1071.68" x2="1071.68" y1="0" y2="1241.02" />
            <line stroke="white" x1="1091.16" x2="1091.16" y1="0" y2="1241.02" />
            <line stroke="white" x1="1110.64" x2="1110.64" y1="0" y2="1241.02" />
            <line stroke="white" x1="1130.11" x2="1130.11" y1="0" y2="1241.02" />
            <line stroke="white" x1="1149.59" x2="1149.59" y1="0" y2="1241.02" />
            <line stroke="white" x1="1169.06" x2="1169.06" y1="0" y2="1241.02" />
            <line stroke="white" x1="1188.54" x2="1188.54" y1="0" y2="1241.02" />
            <line stroke="white" x1="1208.02" x2="1208.02" y1="0" y2="1241.02" />
            <line stroke="white" x1="1227.49" x2="1227.49" y1="0" y2="1241.02" />
            <line stroke="white" x1="1246.97" x2="1246.97" y1="0" y2="1241.02" />
            <line stroke="white" x1="1266.44" x2="1266.44" y1="0" y2="1241.02" />
            <line stroke="white" x1="1285.92" x2="1285.92" y1="0" y2="1241.02" />
            <line stroke="white" x1="1305.4" x2="1305.4" y1="0" y2="1241.02" />
            <line stroke="white" x1="1324.87" x2="1324.87" y1="0" y2="1241.02" />
            <line stroke="white" x1="1344.35" x2="1344.35" y1="0" y2="1241.02" />
            <line stroke="white" x1="1363.83" x2="1363.83" y1="0" y2="1241.02" />
            <line stroke="white" x1="1383.3" x2="1383.3" y1="0" y2="1241.02" />
            <line stroke="white" x1="1402.78" x2="1402.78" y1="0" y2="1241.02" />
            <line stroke="white" x1="1422.25" x2="1422.25" y1="0" y2="1241.02" />
            <line stroke="white" x1="1441.73" x2="1441.73" y1="0" y2="1241.02" />
            <line stroke="white" x1="1461.2" x2="1461.2" y1="0" y2="1241.02" />
            <line stroke="white" x1="1480.68" x2="1480.68" y1="0" y2="1241.02" />
            <line stroke="white" x1="1500.16" x2="1500.16" y1="0" y2="1241.02" />
            <line stroke="white" x1="1519.63" x2="1519.63" y1="0" y2="1241.02" />
            <line stroke="white" x1="1539.11" x2="1539.11" y1="0" y2="1241.02" />
            <line stroke="white" x1="1558.59" x2="1558.59" y1="0" y2="1241.02" />
            <line stroke="white" x1="1578.06" x2="1578.06" y1="0" y2="1241.02" />
            <line stroke="white" x1="1597.54" x2="1597.54" y1="0" y2="1241.02" />
            <line stroke="white" x1="1617.01" x2="1617.01" y1="0" y2="1241.02" />
            <line stroke="white" x1="1636.49" x2="1636.49" y1="0" y2="1241.02" />
            <line stroke="white" x1="1655.97" x2="1655.97" y1="0" y2="1241.02" />
            <line stroke="white" x1="1675.44" x2="1675.44" y1="0" y2="1241.02" />
            <line stroke="white" x1="1694.92" x2="1694.92" y1="0" y2="1241.02" />
            <line stroke="white" x1="1714.39" x2="1714.39" y1="0" y2="1241.02" />
            <line stroke="white" x1="1733.87" x2="1733.87" y1="0" y2="1241.02" />
            <line stroke="white" x1="1753.35" x2="1753.35" y1="0" y2="1241.02" />
            <line stroke="white" x1="1772.82" x2="1772.82" y1="0" y2="1241.02" />
            <line stroke="white" x1="1792.3" x2="1792.3" y1="0" y2="1241.02" />
            <line stroke="white" x1="1811.77" x2="1811.77" y1="0" y2="1241.02" />
            <line stroke="white" x1="1831.25" x2="1831.25" y1="0" y2="1241.02" />
            <line stroke="white" x1="1850.73" x2="1850.73" y1="0" y2="1241.02" />
            <line stroke="white" x1="1870.2" x2="1870.2" y1="0" y2="1241.02" />
            <line stroke="white" x1="1909.15" x2="1909.15" y1="0" y2="1241.02" />
          </svg>
        </div>
      </div>

      {/* Background grid lines - Horizontal lines (Group3) - Extended to full width - Desktop only */}
      <div className="desktop-only absolute h-[1203.662px] left-0 opacity-5 top-[22.74px] w-full pointer-events-none">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 1205">
            <line stroke="white" x1="0" x2="1920" y1="0.5" y2="0.5" />
            <line stroke="white" x1="0" x2="1920" y1="21.618" y2="21.618" />
            <line stroke="white" x1="0" x2="1920" y1="42.733" y2="42.733" />
            <line stroke="white" x1="0" x2="1920" y1="63.849" y2="63.849" />
            <line stroke="white" x1="0" x2="1920" y1="84.965" y2="84.965" />
            <line stroke="white" x1="0" x2="1920" y1="106.083" y2="106.083" />
            <line stroke="white" x1="0" x2="1920" y1="127.2" y2="127.2" />
            <line stroke="white" x1="0" x2="1920" y1="148.318" y2="148.318" />
            <line stroke="white" x1="0" x2="1920" y1="169.436" y2="169.436" />
            <line stroke="white" x1="0" x2="1920" y1="190.55" y2="190.55" />
            <line stroke="white" x1="0" x2="1920" y1="211.667" y2="211.667" />
            <line stroke="white" x1="0" x2="1920" y1="232.786" y2="232.786" />
            <line stroke="white" x1="0" x2="1920" y1="253.901" y2="253.901" />
            <line stroke="white" x1="0" x2="1920" y1="275.019" y2="275.019" />
            <line stroke="white" x1="0" x2="1920" y1="296.135" y2="296.135" />
            <line stroke="white" x1="0" x2="1920" y1="317.253" y2="317.253" />
            <line stroke="white" x1="0" x2="1920" y1="338.37" y2="338.37" />
            <line stroke="white" x1="0" x2="1920" y1="359.485" y2="359.485" />
            <line stroke="white" x1="0" x2="1920" y1="380.603" y2="380.603" />
            <line stroke="white" x1="0" x2="1920" y1="401.721" y2="401.721" />
            <line stroke="white" x1="0" x2="1920" y1="422.838" y2="422.838" />
            <line stroke="white" x1="0" x2="1920" y1="443.952" y2="443.952" />
            <line stroke="white" x1="0" x2="1920" y1="465.07" y2="465.07" />
            <line stroke="white" x1="0" x2="1920" y1="486.189" y2="486.189" />
            <line stroke="white" x1="0" x2="1920" y1="507.305" y2="507.305" />
            <line stroke="white" x1="0" x2="1920" y1="528.421" y2="528.421" />
            <line stroke="white" x1="0" x2="1920" y1="549.536" y2="549.536" />
            <line stroke="white" x1="0" x2="1920" y1="570.655" y2="570.655" />
            <line stroke="white" x1="0" x2="1920" y1="591.773" y2="591.773" />
            <line stroke="white" x1="0" x2="1920" y1="612.889" y2="612.889" />
            <line stroke="white" x1="0" x2="1920" y1="634.006" y2="634.006" />
            <line stroke="white" x1="0" x2="1920" y1="655.124" y2="655.124" />
            <line stroke="white" x1="0" x2="1920" y1="676.238" y2="676.238" />
            <line stroke="white" x1="0" x2="1920" y1="697.356" y2="697.356" />
            <line stroke="white" x1="0" x2="1920" y1="718.472" y2="718.472" />
            <line stroke="white" x1="0" x2="1920" y1="739.591" y2="739.591" />
            <line stroke="white" x1="0" x2="1920" y1="760.708" y2="760.708" />
            <line stroke="white" x1="0" x2="1920" y1="781.825" y2="781.825" />
            <line stroke="white" x1="0" x2="1920" y1="802.941" y2="802.941" />
            <line stroke="white" x1="0" x2="1920" y1="824.058" y2="824.058" />
            <line stroke="white" x1="0" x2="1920" y1="845.174" y2="845.174" />
            <line stroke="white" x1="0" x2="1920" y1="866.29" y2="866.29" />
            <line stroke="white" x1="0" x2="1920" y1="887.408" y2="887.408" />
            <line stroke="white" x1="0" x2="1920" y1="908.526" y2="908.526" />
            <line stroke="white" x1="0" x2="1920" y1="929.642" y2="929.642" />
            <line stroke="white" x1="0" x2="1920" y1="950.76" y2="950.76" />
            <line stroke="white" x1="0" x2="1920" y1="971.875" y2="971.875" />
            <line stroke="white" x1="0" x2="1920" y1="992.994" y2="992.994" />
            <line stroke="white" x1="0" x2="1920" y1="1014.11" y2="1014.11" />
            <line stroke="white" x1="0" x2="1920" y1="1035.23" y2="1035.23" />
            <line stroke="white" x1="0" x2="1920" y1="1056.34" y2="1056.34" />
            <line stroke="white" x1="0" x2="1920" y1="1077.46" y2="1077.46" />
            <line stroke="white" x1="0" x2="1920" y1="1098.58" y2="1098.58" />
            <line stroke="white" x1="0" x2="1920" y1="1119.69" y2="1119.69" />
            <line stroke="white" x1="0" x2="1920" y1="1140.81" y2="1140.81" />
            <line stroke="white" x1="0" x2="1920" y1="1161.93" y2="1161.93" />
            <line stroke="white" x1="0" x2="1920" y1="1183.05" y2="1183.05" />
            <line stroke="white" x1="0" x2="1920" y1="1204.16" y2="1204.16" />
          </svg>
        </div>
      </div>

      {/* Quote text */}
      <motion.div 
        className="absolute capitalize font-['Delight:Light',sans-serif] font-light h-[60.299px] leading-[1.5] left-[450px] text-[#fbe1c4] text-[16px] top-[410.79px] tracking-[0.64px] w-[245.668px]"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="mb-0">"Your Growth Starts With</p>
        <p>{` A Clear Brand."`}</p>
      </motion.div>

      {/* Masked Monkey Image */}
      <div className="absolute contents left-[719px] top-[360px]" data-name="Mask group">
        <div 
          className="absolute h-[1057.152px] left-[69.88px] top-[121.82px] w-[1879.381px] floating-image" 
          data-name="5 2"
          style={{ 
            maskImage: `url('${img52}')`,
            maskSize: '479.289px 162.665px',
            maskPosition: '649.121px 238.18px',
            maskRepeat: 'no-repeat',
            WebkitMaskImage: `url('${img52}')`,
            WebkitMaskSize: '479.289px 162.665px',
            WebkitMaskPosition: '649.121px 238.18px',
            WebkitMaskRepeat: 'no-repeat'
          }}
        >
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
            src={img53} 
          />
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
      
      {/* Large typography footer section */}
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
          style={{ transformOrigin: 'left' }}
        />
        
        {/* Bottom row - Contact info with proper spacing and hierarchy */}
        <motion.div 
          className="grid grid-cols-3 gap-8 items-start text-[15px] uppercase tracking-[0.08em]"
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
          
          {/* Center: Empty */}
          <div></div>
          
          {/* Right: Social links */}
          <div className="flex gap-[48px] justify-end">
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
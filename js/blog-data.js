(function () {
  "use strict";

  var AUTHORS = {
    rajesh: {
      name: "Rajesh Kumar",
      role: "Senior Technician · 15 yrs",
      tagline: "Founder & Senior Technician, FixMaster",
      initial: "R",
      bio: "With 15+ years of hands-on experience in electrical appliance repair, Rajesh has diagnosed and fixed over 5,000 fans personally. He founded FixMaster in 2009 with a mission to provide transparent, quality appliance repair in Tamil Nadu."
    },
    priya: {
      name: "Priya Venkatesh",
      role: "Certified Technician · 8 yrs",
      tagline: "Geyser & Water Heater Specialist, FixMaster",
      initial: "P",
      bio: "Priya is an ITI-certified technician specializing in water heating systems and home appliances. She has completed 1,200+ geyser and iron repairs with a safety-first approach across Chennai and nearby areas."
    },
    arun: {
      name: "Arun Prakash",
      role: "Appliance Expert · 10 yrs",
      tagline: "Kitchen Appliances Specialist, FixMaster",
      initial: "A",
      bio: "Arun specializes in kitchen appliance repair — mixer grinders, blenders and juicers. With 10 years of motor repair experience, he has personally serviced over 3,500 kitchen appliances across Tamil Nadu."
    }
  };

  var POSTS = {
    "fan-maintenance": {
      id: "fan-maintenance",
      title: "The Complete Guide to Ceiling Fan Maintenance: Extend Your Fan's Life by 10 Years",
excerpt: "Everything you need to know about maintaining your ceiling fan — from oiling bearings to cleaning blades, balancing, and identifying early warning signs before a breakdown.",
      badge: "Fan Care",
      category: "Fan Care",
      date: "Aug 10, 2025",
      readTime: "8 min read",
      views: "2,400",
      image: "images/blog_fan_maintenance.jpg",
      alt: "Ceiling Fan Maintenance Guide",
      author: "rajesh",
      metaDescription: "Complete ceiling fan maintenance guide — oiling bearings, cleaning blades, balancing and early warning signs. Extend your fan's life by 10 years.",
      ctaWidget: { heading: "Fan Needs Care?", text: "Let our certified technicians service it today. Free pickup available!", btnText: "Book Fan Service", btnHref: "services.html#fan" },
      ctaBanner: { heading: "Give Your Fan a Full Service!", text: "Annual fan service with cleaning, oiling and bearing check. Free pickup and 30-day warranty.", btnText: "Book Fan Service", btnHref: "services.html#fan" },
      body: `
        <p>Your ceiling fan is the hardest-working appliance in your home — it runs for hours every single day, and yet it's the one we ignore the most. With a little regular maintenance, a quality ceiling fan can easily last 15 to 20 years. In this complete guide, our founder Rajesh Kumar shares the exact maintenance routine FixMaster technicians follow to keep fans running like new.</p>

        <div class="tip-box">
          <strong style="color:var(--color-blue);display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Quick Tip</strong>
          The single most valuable habit: deep-clean your fan twice a year (before summer and before monsoon). Dust is the #1 silent killer of fan motors.
        </div>

        <h2>Why Ceiling Fan Maintenance Matters</h2>
        <p>Dust and grime don't just make your fan look dirty — they settle inside the motor windings, increase electrical resistance, reduce airflow and force the motor to work harder. A fan that is cleaned and oiled once a year uses noticeably less electricity and runs quieter and cooler.</p>

        <h2>The Monthly 2-Minute Routine</h2>
        <ul>
          <li>Wipe the blades with a dry cloth or use a vacuum brush attachment</li>
          <li>Listen for new noises — clicking, humming or grinding</li>
          <li>Check the remote/regulator responds at every speed</li>
          <li>Feel the fan body for unusual vibration</li>
        </ul>

        <h2>The Annual Deep Service (Every 12 Months)</h2>
        <p>This is what a professional fan service includes, and what you can attempt yourself if you're handy:</p>
        <ol>
          <li><strong>Dismantle and clean the blades</strong> — remove grime with warm soapy water and dry thoroughly</li>
          <li><strong>Oiling the bearings</strong> — apply 2–3 drops of light machine oil (never cooking oil) into the bearing openings</li>
          <li><strong>Clean the motor windings</strong> — use a soft brush or blower to remove accumulated dust</li>
          <li><strong>Tighten all connections</strong> — check the junction box wires and capacitor terminals</li>
          <li><strong>Check the capacitor</strong> — a bulging or leaking capacitor must be replaced immediately</li>
          <li><strong>Balance the blades</strong> — attach small balancing clips or adjust blade screws if the fan wobbles</li>
        </ol>

        <div class="warning-box">
          <strong style="color:var(--color-orange);display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Warning</strong>
          Always switch off the mains supply before opening the fan canopy or junction box. If you see burnt wire insulation, smoke or a melting smell, stop and call a technician immediately.
        </div>

        <h2>Early Warning Signs to Watch For</h2>
        <ul>
          <li>Fan takes longer to reach full speed</li>
          <li>Humming or clicking that wasn't there before</li>
          <li>Wobbling even after blade cleaning</li>
          <li>Burning smell or warm motor body after running</li>
          <li>Sudden drop in speed on all settings</li>
        </ul>

        <blockquote>"A fan that is serviced every year costs you almost nothing in maintenance — but a fan that is neglected for 5 years almost always ends in a full motor rewinding or replacement." — Rajesh Kumar, Founder</blockquote>

        <h2>Maintenance Budget Guide</h2>
        <p>A professional annual fan service at FixMaster costs between ₹250–₹500 including oiling, cleaning and connection checks. Compare that with ₹600–₹1,500 for a motor repair, and ₹1,800+ for a full fan replacement. Regular maintenance is the cheapest repair there is.</p>
      `
    },

    "fan-running-slow": {
      id: "fan-running-slow",
      title: "Why Is My Ceiling Fan Running Slow? 5 Causes & Easy Fixes",
excerpt: "Discover the 5 most common causes of a slow ceiling fan and simple fixes you can do at home without a technician.",
      badge: "Fan Care",
      category: "Fan Care",
      date: "Aug 5, 2025",
      readTime: "5 min read",
      views: "2,400",
      image: "images/blog_fan_slow.jpg",
      alt: "Ceiling Fan Repair",
      author: "rajesh",
      metaDescription: "Why Is My Ceiling Fan Running Slow? Complete guide by FixMaster certified technicians. Fix fan speed issues at home.",
      ctaWidget: { heading: "Fan Running Slow?", text: "Let our certified technicians fix it today. Free pickup available!", btnText: "Book Fan Repair", btnHref: "services.html#fan" },
      ctaBanner: { heading: "Is Your Fan Running Slow? Let Us Fix It!", text: "Free pickup, same-day diagnosis, and 30-day warranty. Call our certified fan technicians now.", btnText: "Book Fan Repair", btnHref: "services.html#fan" },
      body: `
        <p>A slow-running ceiling fan is one of the most common complaints we get at FixMaster — and the good news is that most causes are simple and affordable to fix. In this guide, our senior technician Rajesh Kumar walks you through the 5 most common reasons your ceiling fan has slowed down and exactly what to do about each one.</p>

        <div class="tip-box">
          <strong style="color:var(--color-blue);display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Quick Tip</strong>
          Before calling a technician, try running your fan at its highest speed setting. If it runs fine at high speed but slow at medium/low, the problem is almost certainly the capacitor — a ₹150 fix!
        </div>

        <h2>Cause #1: Failed Capacitor (Most Common)</h2>
        <p>The capacitor is a small cylindrical component inside the fan's motor housing. Its job is to provide the initial boost of power to get the motor spinning and regulate its speed. When it fails, the fan runs very slowly or makes a humming noise without spinning at all.</p>
        <p><strong>Signs of a failed capacitor:</strong></p>
        <ul>
          <li>Fan runs slowly at all speeds</li>
          <li>Fan starts only when you give it a push by hand</li>
          <li>Humming sound but fan doesn't spin</li>
          <li>Fan was working fine, then suddenly slowed down</li>
        </ul>
        <p><strong>Fix:</strong> Capacitor replacement is the most common fan repair. Cost ranges from ₹150–₹350 including labor, and takes about 30 minutes.</p>

        <h2>Cause #2: Worn Bearings</h2>
        <p>Ceiling fan motors have two types of bearings — ball bearings in premium fans, and bush bearings in standard fans. Over years of use (especially in dusty or humid environments), these bearings wear out and create friction, causing the motor to struggle and the fan to run slow.</p>

        <div class="warning-box">
          <strong style="color:var(--color-orange);display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Warning</strong>
          If you hear a grinding or scraping noise along with slow speed, stop using the fan immediately. Continuing to run a fan with severely worn bearings can damage the motor armature — turning a ₹400 repair into a ₹1,200+ job.
        </div>

        <h2>Cause #3: Dirty or Corroded Motor Coils</h2>
        <p>Dust accumulation inside the motor windings increases resistance and reduces the magnetic force, causing slower rotation. This is especially common in fans that haven't been serviced in 2+ years.</p>

        <h2>Cause #4: Faulty Speed Regulator</h2>
        <p>If your fan runs fine on one speed setting but very slowly on others, the speed regulator (the step-down transformer or electronic dimmer controlling your fan) is likely faulty. Modern electronic regulators are especially susceptible to voltage spikes during power cuts.</p>

        <h2>Cause #5: Loose Electrical Connections</h2>
        <p>Over time, vibration causes wiring terminals inside the fan body and junction box to loosen. Loose connections increase resistance in the circuit, reducing voltage supply to the motor and causing slow operation. This is a safety hazard — loose connections can cause arcing and fires.</p>

        <blockquote>"If your fan has been running slow for more than a week, don't wait — small electrical faults compound quickly. What starts as a slow fan often becomes a completely dead motor if ignored." — Rajesh Kumar, Senior Technician</blockquote>

        <h2>When to DIY vs. Call a Professional</h2>
        <p>You can safely check and replace the regulator yourself if you're comfortable with basic electrical work. However, opening the fan motor housing, replacing bearings, or rewinding coils should always be done by a certified technician for safety.</p>
        <p><strong>Rule of thumb:</strong> If the repair involves opening the motor housing, call FixMaster. It's not worth the risk of electrocution or voiding your warranty.</p>
      `
    },

    "geyser-noise": {
      id: "geyser-noise",
      title: "Geyser Making Noise? Here's Exactly Why",
excerpt: "Popping, hissing, or rumbling from your water heater — we decode every geyser sound and what it means for your safety.",
      badge: "Geyser",
      category: "Geyser",
      date: "Jul 28, 2025",
      readTime: "7 min read",
      views: "1,850",
      image: "images/blog_geyser_noise.jpg",
      alt: "Geyser Making Noise",
      author: "priya",
      metaDescription: "Popping, hissing, or rumbling from your water heater — we decode every geyser sound and what it means for your safety.",
      ctaWidget: { heading: "Geyser Making Noise?", text: "Let our certified technicians fix it today. Free pickup available!", btnText: "Book Geyser Repair", btnHref: "services.html#geyser" },
      ctaBanner: { heading: "Geyser Troubles? We Fix It Fast!", text: "Same-day diagnosis for noisy or leaking geysers. Free pickup and 30-day warranty.", btnText: "Book Geyser Repair", btnHref: "services.html#geyser" },
      body: `
        <p>Your geyser is the one appliance where noise is never normal. Popping, hissing, rumbling or whistling from a water heater usually points to sediment, heating element wear, or a pressure issue — some of which can be dangerous if ignored. In this guide, water heater specialist Priya Venkatesh decodes every geyser sound and tells you what to do.</p>

        <div class="tip-box">
          <strong style="color:var(--color-blue);display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Quick Tip</strong>
          Most geyser noises are caused by hard-water scale (limescale). If your area has hard water, flush the tank once every 6 months to add years to the heater's life.
        </div>

        <h2>Sound #1: Popping or Gurgling</h2>
        <p>This is the most common geyser complaint — and it's almost always limescale. Minerals in hard water settle on the heating element as a crust. Water trapped under the crust boils and pops, like popcorn in a pan.</p>
        <p><strong>What it means:</strong> The heating element is working harder, heating slower, and consuming more electricity. Over time the element can burn out completely.</p>
        <p><strong>Fix:</strong> Descaling the element and flushing the tank (professional service: ₹400–₹700). If scale is severe, the element may need replacement.</p>

        <h2>Sound #2: Hissing or Whistling</h2>
        <p>A hiss usually means water is leaking onto a hot surface inside the unit, or the inlet valve is vibrating. Whistling typically comes from a partially closed inlet valve or a worn washer.</p>
        <p><strong>Fix:</strong> Check that the inlet valve is fully open. If the sound continues, the pressure release valve may need inspection — this is a safety-critical part and should be checked by a professional.</p>

        <h2>Sound #3: Rumbling or Booming</h2>
        <p>A deep rumble means the water inside is boiling — the thermostat is faulty or set too high, allowing water to reach boiling point. This is the most serious noise on this list.</p>

        <div class="warning-box">
          <strong style="color:var(--color-orange);display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Warning</strong>
          If your geyser rumbles or the tank feels extremely hot to touch, switch it off at the mains and stop using it immediately. A faulty thermostat can over-pressurize the tank — call a technician before using the geyser again.
        </div>

        <h2>Sound #4: Clicking on Startup</h2>
        <p>A single soft click when the geyser switches on is normal — it's the thermostat or thermal cut-out engaging. Frequent rapid clicking (several times per minute) means a failing thermostat or loose heating element.</p>

        <h2>Preventive Maintenance Checklist</h2>
        <ul>
          <li>Flush the tank every 6 months in hard-water areas</li>
          <li>Set thermostat to 55–60°C — hot enough, but safe and efficient</li>
          <li>Check the pressure release valve yearly</li>
          <li>Inspect the earth leakage circuit breaker monthly</li>
          <li>Replace the sacrificial anode rod every 2–3 years</li>
        </ul>

        <blockquote>"Geysers fail silently before they fail loudly. By the time you hear a rumble, the thermostat has been overheating for weeks. A yearly service is ₹500 — a tank replacement is ₹8,000." — Priya Venkatesh, Geyser Specialist</blockquote>
      `
    },

    "mixer-overheating": {
      id: "mixer-overheating",
      title: "Mixer Grinder Overheating: Causes & Quick Fix",
excerpt: "Is your mixer grinder getting too hot too fast? Learn why this happens and how to prevent motor burnout with simple maintenance.",
      badge: "Mixer",
      category: "Mixer & Grinder",
      date: "Jul 15, 2025",
      readTime: "4 min read",
      views: "1,620",
      image: "images/blog_mixer_overheat.jpg",
      alt: "Mixer Grinder Overheating",
      author: "arun",
      metaDescription: "Is your mixer grinder getting too hot too fast? Learn why this happens and how to prevent motor burnout with simple maintenance.",
      ctaWidget: { heading: "Mixer Overheating?", text: "Let our certified technicians fix it today. Free pickup available!", btnText: "Book Mixer Repair", btnHref: "services.html#mixer" },
      ctaBanner: { heading: "Mixer Motor Burning Out?", text: "Quick mixer grinder repair with genuine spares. Free pickup and 30-day warranty.", btnText: "Book Mixer Repair", btnHref: "services.html#mixer" },
      body: `
        <p>A mixer grinder that runs hot is a warning sign, not a routine event. Kitchen appliance specialist Arun Prakash explains the 5 most common reasons mixers overheat, how to fix them at home, and when to stop before you burn the motor.</p>

        <div class="tip-box">
          <strong style="color:var(--color-blue);display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Quick Tip</strong>
          Run your mixer in short bursts — maximum 3 minutes continuous — and let it cool for 2 minutes between batches. Continuous heavy grinding is the #1 cause of motor burnout.
        </div>

        <h2>Cause #1: Overloading the Jar</h2>
        <p>Filling the jar past the marked maximum line forces the motor to work beyond its rating. The motor draws more current, heats up fast, and the thermal overload trips — or worse, the winding insulation melts.</p>
        <p><strong>Fix:</strong> Grind in smaller batches. If you must process large quantities, divide the work and give the motor cooling breaks.</p>

        <h2>Cause #2: Worn Carbon Brushes</h2>
        <p>Carbon brushes transfer power to the rotating armature. As they wear down, they spark more, generate heat, and reduce motor efficiency. A heavily sparking mixer is easy to see in a dark room.</p>
        <p><strong>Fix:</strong> Brush replacement is a ₹100–₹200 fix and takes 10 minutes. Replace both brushes at the same time.</p>

        <h2>Cause #3: Blocked Air Vents & Dust</h2>
        <p>Mixer motors are air-cooled through vents at the base. Kitchen dust, flour and oil film clog these vents, trapping heat inside the motor housing.</p>
        <p><strong>Fix:</strong> Unplug and clean the base vents with a dry brush or blower every month. Never block the vents while running.</p>

        <div class="warning-box">
          <strong style="color:var(--color-orange);display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Warning</strong>
          A burning smell or smoke from a mixer means the winding insulation is already damaged. Switch off immediately — continuing to run it turns a ₹400 rewinding job into a full motor replacement.
        </div>

        <h2>Cause #4: Jammed or Dull Blades</h2>
        <p>Dull blades struggle to cut and make the motor work harder. Stones or very hard ingredients can jam the blade assembly, stalling the motor and overheating it within seconds.</p>
        <p><strong>Fix:</strong> Sharpen or replace blades, and always check for stones before grinding spices.</p>

        <h2>Cause #5: Old Motor Windings</h2>
        <p>After 5–8 years of daily use, motor winding insulation naturally degrades, causing internal shorting and heat. If your old mixer runs hot even after cleaning, brushes and blade checks, the windings are likely tired.</p>
        <p><strong>Fix:</strong> Get a professional rewinding diagnosis. If rewinding costs more than half the price of a new mixer, replacement is smarter.</p>

        <blockquote>"In 10 years of mixer repairs, 8 out of 10 burnt motors could have been saved with one habit: giving the motor a break between batches." — Arun Prakash, Kitchen Appliance Specialist</blockquote>
      `
    },

    "iron-steam": {
      id: "iron-steam",
      title: "Steam Iron Not Steaming? Fix It in 5 Steps",
excerpt: "A blocked steam iron is usually easy to fix at home. Follow our step-by-step guide to clear vents and restore full steam output.",
      badge: "Iron Tips",
      category: "Iron Tips",
      date: "Jul 3, 2025",
      readTime: "3 min read",
      views: "1,410",
      image: "images/blog_iron_steam.jpg",
      alt: "Steam Iron Not Steaming",
      author: "priya",
      metaDescription: "A blocked steam iron is usually easy to fix at home. Follow our step-by-step guide to clear vents and restore full steam output.",
      ctaWidget: { heading: "Iron Not Steaming?", text: "Let our certified technicians fix it today. Free pickup available!", btnText: "Book Iron Repair", btnHref: "services.html#iron" },
      ctaBanner: { heading: "Iron Not Working Properly?", text: "Fast iron repair with genuine spare parts. Free pickup and 30-day warranty.", btnText: "Book Iron Repair", btnHref: "services.html#iron" },
      body: `
        <p>A steam iron that suddenly stops steaming is frustrating — but in most cases it's a simple blockage you can clear at home in 20 minutes. Priya Venkatesh walks you through the 5-step FixMaster method for restoring full steam output.</p>

        <div class="tip-box">
          <strong style="color:var(--color-blue);display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Quick Tip</strong>
          Always use distilled or demineralised water in your iron. Tap water minerals are what clog steam vents in the first place.
        </div>

        <h2>Step 1: Empty and Cool the Iron</h2>
        <p>Unplug the iron and let it cool completely. Then empty the water tank completely — never store an iron with water inside, as minerals settle and form scale.</p>

        <h2>Step 2: Clean the Steam Vents</h2>
        <p>Dip a cotton bud in white vinegar and gently clean each steam hole on the soleplate. For stubborn scale, leave the vinegar-soaked bud on the vent for 10 minutes before wiping.</p>

        <h2>Step 3: Descale with Vinegar (Tank Method)</h2>
        <p>Fill the tank one-third with white vinegar and two-thirds with distilled water. Heat the iron on high with steam mode for 5 minutes, then press the steam burst button several times over an old cloth to flush the scale out. Rinse the tank thoroughly afterwards.</p>

        <h2>Step 4: Check the Thermostat & Settings</h2>
        <p>Steam only works above a certain temperature (usually the two-dot heat setting or higher). If you're ironing on a low setting, steam simply won't produce. Also check that the steam dial isn't set to "dry".</p>

        <h2>Step 5: Inspect the Spray/Steam Pump</h2>
        <p>If the soleplate is clean, the tank is fresh, and settings are correct, but there's still no steam, the internal pump or valve may be faulty. Some irons have a removable valve that can be cleaned; if not, it's time for professional service.</p>

        <div class="warning-box">
          <strong style="color:var(--color-orange);display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Warning</strong>
          Never shake a hot iron while testing steam — boiling water inside the tank can splash out and cause serious burns. Always point the iron away from you and wear a heat-safe glove.
        </div>

        <blockquote>"9 out of 10 'broken' steam irons we receive just need a good descaling. Try the vinegar method before you pay for a repair — it costs ₹20." — Priya Venkatesh, Certified Technician</blockquote>
      `
    },

    "diy-tips": {
      id: "diy-tips",
      title: "Top 10 Appliance Maintenance Tips That Save Money",
excerpt: "Simple preventive habits that extend the lifespan of your electrical appliances and dramatically reduce repair costs.",
      badge: "DIY Tips",
      category: "DIY Tips",
      date: "Jun 20, 2025",
      readTime: "6 min read",
      views: "2,150",
      image: "images/blog_diy_tips.png",
      alt: "Appliance Maintenance Tips",
      author: "rajesh",
      metaDescription: "Simple preventive habits that extend the lifespan of your electrical appliances and dramatically reduce repair costs.",
      ctaWidget: { heading: "Need a Repair?", text: "Our technicians are ready to fix your appliance today.", btnText: "Book Now", btnHref: "contact.html" },
      ctaBanner: { heading: "Prevention Failed? We'll Fix It!", text: "Free diagnosis, genuine spares, and 30-day warranty on every repair.", btnText: "Book a Repair", btnHref: "contact.html" },
      body: `
        <p>Most appliance breakdowns are preventable. Over 15 years at FixMaster, we've noticed the same small habits — and the same small mistakes — repeat in thousands of homes. Here are the 10 habits that will save you the most money on repairs.</p>

        <div class="tip-box">
          <strong style="color:var(--color-blue);display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Quick Tip</strong>
          The average FixMaster repair costs ₹450. The average breakdown caused by neglect costs ₹1,200. Prevention is always 2–3× cheaper.
        </div>

        <h2>1. Dust Your Appliances Monthly</h2>
        <p>Dust is an insulator that traps heat. A layer of dust on motor housings, vents and condenser coils makes every appliance work harder and run hotter. Ten minutes with a brush or vacuum monthly is the single highest-ROI habit.</p>

        <h2>2. Don't Overload Motors</h2>
        <p>Mixers, wet grinders and fans all have rated capacities. Overloading them consistently is the fastest way to kill a motor. Respect the maximum fill lines and run machines in bursts.</p>

        <h2>3. Use the Right Water</h2>
        <p>Steam irons and geysers suffer most from hard water. Use distilled water in irons and flush geyser tanks every 6 months to prevent limescale build-up.</p>

        <h2>4. Give Appliances Breathing Room</h2>
        <p>Refrigerators, TVs and chargers need airflow. Wall-hugging appliances overheat quietly for years before failing suddenly. Keep at least 4–5 cm of clearance behind heat-generating appliances.</p>

        <h2>5. Unplug During Storms & Outages</h2>
        <p>Voltage spikes during power cuts and lightning are the top cause of fried circuit boards. Unplug sensitive appliances or use a quality surge protector.</p>

        <h2>6. Listen to Your Appliances</h2>
        <p>New noises are early warning signs. A clicking fan, humming geyser or rattling mixer is your appliance telling you something is loose or worn. Early fixes cost ₹150–₹400; late fixes cost 3–5× more.</p>

        <h2>7. Replace Filters & Carbon Brushes on Time</h2>
        <p>Filters in washing machines and carbon brushes in mixers are consumables, not failures. Replace them on schedule and the appliance keeps performing like new.</p>

        <h2>8. Don't DIY Electrical Work Beyond Your Skill</h2>
        <p>The most expensive "repair" we see is a good appliance damaged by a bad DIY attempt. If a job involves opening a motor housing or mains wiring, call a professional. It's cheaper and safer.</p>

        <h2>9. Keep a Service Schedule</h2>
        <p>Book an annual check-up for fans and geysers before summer. Seasonal servicing catches problems when they're tiny — and it costs a fraction of emergency repairs.</p>

        <h2>10. Buy Quality, Maintain It, and Keep It 10 Years</h2>
        <p>The cheapest appliance is the one you never replace. A maintained quality appliance lasting 15 years beats a cheap appliance replaced every 3 years, every single time.</p>

        <blockquote>"We don't make money from people who maintain their appliances — and that's exactly why we recommend it. A maintained home is our best advertisement." — Rajesh Kumar, Founder</blockquote>
      `
    },

    "repair-guide": {
      id: "repair-guide",
      title: "When to Repair vs. Replace an Appliance",
excerpt: "The age, repair cost ratio, and energy efficiency factors that help you decide whether to fix or replace a broken appliance.",
      badge: "Repair Guide",
      category: "Repair Guide",
      date: "Jun 10, 2025",
      readTime: "9 min read",
      views: "1,980",
      image: "images/blog_repair_guide.png",
      alt: "Repair vs Replace Appliance",
      author: "rajesh",
      metaDescription: "The age, repair cost ratio, and energy efficiency factors that help you decide whether to fix or replace a broken appliance.",
      ctaWidget: { heading: "Need a Repair?", text: "Our technicians are ready to fix your appliance today.", btnText: "Book Now", btnHref: "contact.html" },
      ctaBanner: { heading: "Not Sure Whether to Repair or Replace?", text: "Get a free diagnosis and an honest recommendation from our technicians.", btnText: "Book a Diagnosis", btnHref: "contact.html" },
      body: `
        <p>"Should I repair it or buy a new one?" — the question we answer every single day at FixMaster. The honest answer depends on four factors: the appliance's age, the repair cost, its energy efficiency, and its safety condition. Here's the exact framework our technicians use.</p>

        <div class="tip-box">
          <strong style="color:var(--color-blue);display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Quick Tip</strong>
          The golden rule: if the repair costs more than 50% of the price of a new equivalent appliance, replace it — unless the appliance is less than 3 years old, in which case repair it even up to 70%.
        </div>

        <h2>Factor #1: Age of the Appliance</h2>
        <p>Every appliance has a typical design life:</p>
        <ul>
          <li><strong>Ceiling fans:</strong> 15–20 years (worth repairing up to ~15 years)</li>
          <li><strong>Mixer grinders:</strong> 8–10 years (worth repairing up to ~8 years)</li>
          <li><strong>Geysers:</strong> 8–12 years (worth repairing up to ~10 years)</li>
          <li><strong>Steam irons:</strong> 5–8 years (repair only if under 5 years)</li>
          <li><strong>Refrigerators & washing machines:</strong> 12–15 years</li>
        </ul>
        <p>Past the design life, new problems appear faster than you can fix them — the repair treadmill starts.</p>

        <h2>Factor #2: The 50% Cost Rule</h2>
        <p>Compare the repair estimate against the cost of a new appliance with similar features:</p>
        <ul>
          <li>Repair cost below 50% of new price → <strong>repair</strong></li>
          <li>Repair cost above 50% → <strong>replace</strong>, unless the appliance is very young</li>
          <li>Second major repair within 12 months → <strong>replace</strong></li>
        </ul>

        <h2>Factor #3: Energy Efficiency</h2>
        <p>An old appliance that has lost efficiency quietly costs you money every month. A geyser with heavy scale uses up to 30% more electricity. A fan with worn bearings draws more current. When monthly running costs start climbing, the "new price" is really the new price minus future savings.</p>

        <h2>Factor #4: Safety Condition</h2>
        <p>Some conditions make an appliance unsafe regardless of cost:</p>

        <div class="warning-box">
          <strong style="color:var(--color-orange);display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Warning</strong>
          Replace immediately (never repair) if you see: burnt or melted wiring, a geyser with a leaking/damaged pressure relief valve, an appliance that shocks or tingles, or scorch marks on any plug or socket.
        </div>

        <h2>The Decision Table</h2>
        <p>Here's the shortcut we give every customer:</p>
        <ul>
          <li><strong>Under 3 years old:</strong> Repair — it's under or near warranty, and parts are still in production.</li>
          <li><strong>3–8 years:</strong> Repair if cost is under 50% of new price.</li>
          <li><strong>Over 8 years:</strong> Get a free diagnosis; if more than one part is failing, replace.</li>
          <li><strong>Any age, safety issue:</strong> Replace immediately.</li>
        </ul>

        <blockquote>"An honest technician tells you when NOT to repair. At FixMaster, if a replacement is genuinely cheaper, we'll say so — you'll remember the honesty more than the ₹200 we might have earned." — Rajesh Kumar, Founder</blockquote>
      `
    }
  };

  window.FIXMASTER_BLOG = {
    authors: AUTHORS,
    posts: POSTS,
    postOrder: ["fan-maintenance", "fan-running-slow", "geyser-noise", "mixer-overheating", "iron-steam", "diy-tips", "repair-guide"]
  };
})();
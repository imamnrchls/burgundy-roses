/**
 * LAYER 3 — THEME: BURGUNDY ROSES ("Velvet Botanical Stationery")
 * Editorial Luxury Stationery — Deep Velvet Burgundy, Warm Cotton Ivory,
 * Sage Olive & Brushed Antique Gold with Bespoke Watercolor Botanicals.
 */
(function () {
  "use strict";

  var ASSETS = {
    backdropRoses: "img/backdrop-roses.jpg",
    archFrame: "img/burgundy-arch-frame.webp",
    floralDivider: "img/burgundy-floral-divider.webp",
    waxSeal: "img/burgundy-wax-seal.webp",
    botanicalSprig: "img/botanical-sprig.webp",
    roseForeground: "img/rose-foreground.webp",
    rosePetals: "img/rose-petals.webp",
    velvetEnvelope: "img/velvet-envelope.webp"
  };

  var PETAL_COLORS = ["#6E1628", "#580E1D", "#B84D58", "#D6AEB5", "#E5D3B8"];

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = String(text);
    return node;
  }

  function imgEl(src, className, alt) {
    var img = document.createElement("img");
    img.src = src;
    if (className) img.className = className;
    img.alt = alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    return img;
  }

  function svgEl(viewBox, markup, className, width, height) {
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", viewBox);
    if (className) svg.setAttribute("class", className);
    if (width) svg.setAttribute("width", String(width));
    if (height) svg.setAttribute("height", String(height));
    svg.setAttribute("aria-hidden", "true");
    svg.innerHTML = markup;
    return svg;
  }

  function prefersReducedMotion() {
    return Boolean(
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function getPairNames(data) {
    var mempelai = (data && data.mempelai) || {};
    var wanita = (mempelai.wanita && mempelai.wanita.nama_panggilan) || "Alya";
    var pria = (mempelai.pria && mempelai.pria.nama_panggilan) || "Rafa";
    return {
      first: wanita,
      second: pria,
      combined: wanita + " & " + pria
    };
  }

  function formatWeddingDate(data) {
    if (data && data.tanggal_teks) return data.tanggal_teks;
    var iso =
      (data && data.tanggal_utama) ||
      (data && Array.isArray(data.acara) && data.acara[0] && (data.acara[0].tanggal_iso || data.acara[0].mulai));
    if (!iso) return "";
    var d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Jakarta"
    });
  }

  function createMotes(count, extraClass) {
    var wrap = el("div", "pf-motes" + (extraClass ? " " + extraClass : ""));
    wrap.setAttribute("aria-hidden", "true");
    for (var i = 0; i < count; i++) {
      var mote = el("i");
      mote.style.setProperty("--x", ((i * 29 + 7) % 94 + 3) + "%");
      mote.style.setProperty("--y", ((i * 41 + 13) % 86 + 7) + "%");
      mote.style.setProperty("--s", (2.6 + (i % 4) * 1.1).toFixed(1) + "px");
      mote.style.setProperty("--dur", (8 + (i % 5) * 1.8).toFixed(1) + "s");
      mote.style.setProperty("--delay", (-((i * 1.7) % 9)).toFixed(1) + "s");
      wrap.appendChild(mote);
    }
    return wrap;
  }

  function buildNamesHeading(tagName, className, data, id) {
    var pair = getPairNames(data);
    var heading = el(tagName, className);
    if (id) heading.id = id;
    heading.setAttribute("data-pf-names", "");
    heading.append(
      el("span", "pf-name-first", pair.first),
      el("span", "pf-name-amp", " & "),
      el("span", "pf-name-second", pair.second)
    );
    return heading;
  }

  function splitLetters(target) {
    if (!target || target.dataset.pfSplit === "1") return;
    var fullText = (target.textContent || "").replace(/\s+/g, " ").trim();
    if (!fullText) return;
    target.setAttribute("aria-label", fullText);
    target.dataset.pfSplit = "1";

    var walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT, null);
    var textNodes = [];
    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }

    var idx = 0;
    textNodes.forEach(function (textNode) {
      var raw = textNode.textContent;
      if (!raw) return;
      var frag = document.createDocumentFragment();
      var chars = Array.from(raw);
      for (var i = 0; i < chars.length; i++) {
        var ch = chars[i];
        var span = document.createElement("span");
        span.className = ch === " " ? "ch ch--space" : "ch";
        span.style.setProperty("--i", idx++);
        span.setAttribute("aria-hidden", "true");
        span.textContent = ch;
        frag.appendChild(span);
      }
      textNode.replaceWith(frag);
    });
  }

  function updateAllCoupleNames(detail) {
    var first = (detail && detail.wanita) || "Alya";
    var second = (detail && detail.pria) || "Rafa";

    document.querySelectorAll("[data-pf-names]").forEach(function (node) {
      var a = node.querySelector(".pf-name-first");
      var b = node.querySelector(".pf-name-second");
      if (a && b) {
        a.textContent = first;
        b.textContent = second;
      } else {
        node.textContent = first + " & " + second;
      }
    });

    var heroNames = document.getElementById("pf-hero-names");
    if (heroNames && !prefersReducedMotion()) {
      delete heroNames.dataset.pfSplit;
      splitLetters(heroNames);
    }
  }

  /* ---------- Ornaments (Unified Bespoke Watercolor & Artisanal Stationery Media) ---------- */
  var ornaments = {
    /* Layered Burgundy Botanical Scene using bespoke Art Nouveau Arch Frame */
    botanicalScene: function (placement) {
      var scene = el("div", "pf-botanical-scene pf-botanical-scene--" + placement);
      scene.setAttribute("aria-hidden", "true");

      if (placement === "cover") {
        /* 9-slice Art Nouveau arch frame so crown & corner knots never distort */
        scene.appendChild(el("span", "pf-scene-frame pf-scene-frame--slice"));
      } else {
        var frame = imgEl(ASSETS.archFrame, "pf-scene-frame", "");
        frame.loading = "eager";
        scene.appendChild(frame);
      }

      /* Lush bottom burgundy & ivory rose garland anchored gracefully at base */
      var garland = el("span", "pf-scene-piece pf-scene-piece--garland");
      if (placement === "hero") garland.setAttribute("data-depth", "0.18");
      var garlandImg = imgEl(ASSETS.roseForeground, "pf-scene-art br-garland-art", "");
      garlandImg.loading = "eager";
      garland.appendChild(garlandImg);
      scene.appendChild(garland);

      return scene;
    },

    /* Bespoke Watercolor Burgundy Rose & Hellebore Botanical Divider */
    dividerImg: function () {
      var img = imgEl(ASSETS.floralDivider, "pf-divider-img", "");
      img.setAttribute("aria-hidden", "true");
      return img;
    },

    cornerFloral: function (pos) {
      var safePos = pos === "tr" || pos === "bl" || pos === "br" ? pos : "tl";
      var img = imgEl(ASSETS.botanicalSprig, "pf-corner pf-corner--" + safePos, "");
      img.setAttribute("aria-hidden", "true");
      return img;
    },

    /* Artisanal Studio-Macro Hand-Poured Crimson & Gold Rose Wax Seal */
    waxSealImg: function () {
      var img = imgEl(ASSETS.waxSeal, "pf-wax-seal", "");
      img.loading = "eager";
      img.setAttribute("aria-hidden", "true");
      return img;
    },

    /* Arched Cameo fallback if a couple photo is omitted */
    portraitCameo: function (arg1, arg2, arg3) {
      var role = "couple";
      var initial = "A";
      if (arg3 !== undefined) {
        initial = arg1;
        role = arg3;
      } else if (/^(pria|wanita|bride|groom|couple|guest)$/i.test(String(arg1 || ""))) {
        role = arg1;
        initial = arg2 || "A";
      } else if (String(arg1 || "").length <= 3 && arg2) {
        initial = arg1;
        role = arg2;
      } else {
        role = arg1 || "couple";
        initial = arg2 || "A";
      }

      var safeRole = String(role).toLowerCase().replace(/[^a-z0-9_-]/g, "") || "couple";
      var safeInitial = String(initial || "A").trim().slice(0, 3).toUpperCase();
      var cameo = el("div", "pf-cameo pf-cameo--" + safeRole);
      cameo.setAttribute("aria-hidden", "true");

      var crestSvg = svgEl(
        "0 0 180 220",
        '<path d="M90 14 C132 14, 166 48, 166 94 L166 202 L14 202 L14 94 C14 48, 48 14, 90 14 Z" fill="none" stroke="#C4A168" stroke-width="1" opacity="0.7"/>' +
        '<path d="M90 22 C127 22, 158 53, 158 94 L158 194 L22 194 L22 94 C22 53, 53 22, 90 22 Z" fill="none" stroke="#580E1D" stroke-width="0.65" opacity="0.28"/>' +
        '<path d="M46 176 Q90 168 134 176" fill="none" stroke="#C4A168" stroke-width="0.8" opacity="0.55"/>',
        "pf-cameo-crest"
      );

      var roleLabel =
        safeRole === "pria" || safeRole === "groom"
          ? "The Groom"
          : (safeRole === "wanita" || safeRole === "bride" ? "The Bride" : "Beloved");

      cameo.append(
        crestSvg,
        el("span", "pf-cameo-initial", safeInitial),
        el("span", "pf-cameo-tag", roleLabel)
      );
      return cameo;
    },

    laceFrame: function (contentEl) {
      var frame = el("div", "pf-lace-frame" + (contentEl ? " pf-lace-frame--wrapped" : ""));
      var divider = ornaments.dividerImg();
      divider.classList.add("pf-closing-divider");
      frame.appendChild(divider);
      if (contentEl) {
        var inner = el("div", "pf-lace-inner");
        inner.appendChild(contentEl);
        frame.appendChild(inner);
      }
      return frame;
    },

    divider: function () {
      return ornaments.dividerImg();
    },

    /* Clean Editorial Monogram flanked by whisper-thin antique gold hairlines */
    monogram: function (initials) {
      var box = el("div", "pf-monogram");
      box.setAttribute("aria-label", "Monogram " + (initials || ""));
      var letters = el("span", "pf-monogram-letters", initials || "A & R");
      letters.setAttribute("data-lk-initials", "");
      box.append(letters);
      return box;
    },

    photoFrame: function (contentEl) {
      var wrap = el("div", "pf-arch-card pf-frame-wrap");
      if (contentEl) wrap.append(contentEl);
      return wrap;
    },

    portraitPlaceholder: function (initial, nickname) {
      return ornaments.portraitCameo(initial, nickname, "couple");
    },

    closingEmblem: function (initials) {
      var wrap = el("div", "pf-closing-emblem");
      var seal = el("span", "pf-closing-seal");
      seal.appendChild(ornaments.waxSealImg());
      var letters = el("span", "pf-closing-initials", initials || "A & R");
      letters.setAttribute("data-lk-initials", "");
      wrap.append(seal, letters);
      return wrap;
    }
  };

  /* ---------- Opener (Cover & Gate) ---------- */
  var opener = {
    render: function (container, data, guestOrLabels, onOpenOrHooks) {
      if (!container) return;

      var guestName = "Tamu Undangan";
      var onOpen = typeof onOpenOrHooks === "function" ? onOpenOrHooks : null;

      if (typeof guestOrLabels === "string") {
        guestName = guestOrLabels.trim() || "Tamu Undangan";
      } else if (onOpenOrHooks && typeof onOpenOrHooks === "object") {
        guestName = (onOpenOrHooks.guestName && String(onOpenOrHooks.guestName).trim()) || "Tamu Undangan";
        onOpen = onOpenOrHooks.onOpen;
      }

      var backdrop = el("div", "pf-cover-backdrop");
      backdrop.setAttribute("aria-hidden", "true");

      /* Subtle flanking botanicals on wide screens */
      [
        { name: "tl", asset: ASSETS.botanicalSprig },
        { name: "tr", asset: ASSETS.botanicalSprig },
        { name: "bl", asset: ASSETS.roseForeground },
        { name: "br", asset: ASSETS.roseForeground }
      ].forEach(function (piece) {
        var wrap = el("span", "pf-cover-flora pf-cover-flora--" + piece.name);
        var art = imgEl(piece.asset, "pf-cover-flora-art", "");
        art.loading = "eager";
        wrap.appendChild(art);
        backdrop.appendChild(wrap);
      });
      backdrop.appendChild(createMotes(12, "pf-cover-motes"));

      var card = el("div", "pf-cover-card");
      var scene = ornaments.botanicalScene("cover");
      var content = el("div", "pf-cover-content");

      var eyebrow = el("p", "pf-cover-eyebrow", "The Wedding of");
      var names = buildNamesHeading("h1", "pf-cover-names", data);
      var dateStr = formatWeddingDate(data);
      var dateEl = el("p", "pf-cover-date", dateStr);

      var guestBox = el("div", "pf-cover-guest");
      guestBox.append(
        el("p", "pf-cover-to", "Kepada Yth. Bapak/Ibu/Saudara/i"),
        el("p", "pf-cover-guest-name", guestName)
      );

      var actions = el("div", "pf-cover-actions");
      var openBtn = el("button", "pf-open-btn pf-shine");
      openBtn.type = "button";
      openBtn.setAttribute("aria-label", "Buka Undangan");

      var sealWrap = el("span", "pf-open-seal");
      sealWrap.setAttribute("aria-hidden", "true");
      sealWrap.appendChild(ornaments.waxSealImg());

      var openLabel = el("span", "pf-open-label", "Buka Undangan");
      openBtn.append(sealWrap, openLabel);
      if (typeof onOpen === "function") {
        openBtn.addEventListener("click", onOpen);
      }

      actions.append(openBtn);
      content.append(eyebrow, names);
      if (dateStr) content.appendChild(dateEl);

      var flourish = ornaments.dividerImg();
      flourish.classList.add("pf-cover-flourish");
      flourish.loading = "eager";
      content.appendChild(flourish);
      content.append(guestBox, actions);

      card.append(scene, content);
      container.replaceChildren(backdrop, card);
    },

    open: function (container, doneOrOpts) {
      var done = typeof doneOrOpts === "function"
        ? doneOrOpts
        : (doneOrOpts && typeof doneOrOpts.onComplete === "function" ? doneOrOpts.onComplete : function () {});

      if (!container) {
        done();
        return;
      }
      if (container.dataset.opening === "1") return;
      container.dataset.opening = "1";

      container.querySelectorAll("button").forEach(function (btn) {
        btn.disabled = true;
      });

      if (prefersReducedMotion()) {
        done();
        return;
      }

      container.classList.add("is-opening");

      var settled = false;
      var timer = null;
      function finish() {
        if (settled) return;
        settled = true;
        if (timer) clearTimeout(timer);
        container.removeEventListener("animationend", onAnimEnd);
        done();
      }

      function onAnimEnd(e) {
        if (e.target === container) {
          finish();
        }
      }

      container.addEventListener("animationend", onAnimEnd);
      timer = setTimeout(finish, 750);
    }
  };

  /* ---------- Desktop Sticky Aside (>=960px) ---------- */
  var aside = {
    render: function (container, data) {
      if (!container) return;

      var velvet = el("div", "pf-aside-velvet");
      velvet.setAttribute("aria-hidden", "true");

      var filigreeSvg =
        '<path d="M4 44 C4 18, 18 4, 44 4" fill="none" stroke="#EADBC3" stroke-width="0.9" opacity="0.48"/>' +
        '<path d="M10 32 C10 17, 17 10, 32 10" fill="none" stroke="#C4A168" stroke-width="0.7" opacity="0.34"/>';

      ["tl", "tr", "bl", "br"].forEach(function (pos) {
        velvet.appendChild(svgEl("0 0 48 48", filigreeSvg, "pf-aside-filigree pf-aside-filigree--" + pos));
      });
      velvet.appendChild(createMotes(10, "pf-aside-motes"));

      var card = el("div", "pf-aside-card");
      var scene = ornaments.botanicalScene("aside");

      var copy = el("div", "pf-aside-copy");
      var sealBadge = el("div", "pf-aside-seal");
      sealBadge.appendChild(ornaments.waxSealImg());

      var eyebrow = el("p", "pf-aside-eyebrow", "The Wedding of");
      var names = buildNamesHeading("h2", "pf-aside-names", data);

      var dateStr = formatWeddingDate(data);
      var cityStr = (data && data.kota) || "";
      var dateEl = el("p", "pf-aside-meta", dateStr);
      var cityEl = el("p", "pf-aside-city", cityStr);

      copy.append(sealBadge, eyebrow, names);
      if (dateStr) copy.appendChild(dateEl);
      if (cityStr) copy.appendChild(cityEl);

      card.append(scene, copy);
      container.replaceChildren(velvet, card);
    }
  };

  /* ---------- Motion Enhancements ---------- */
  var activeParallaxCleanup = null;

  function enhanceMotion(root, reducedMotion) {
    var scope = root && typeof root.querySelector === "function" ? root : document;
    var isReduced = typeof reducedMotion === "boolean" ? reducedMotion : prefersReducedMotion();

    if (isReduced) return;

    // 1. Letter-by-letter Hero Name Reveal
    var heroNames =
      scope.querySelector("#pf-hero-names") ||
      document.getElementById("pf-hero-names") ||
      scope.querySelector("#pembuka .lk-couple-headline");
    if (heroNames) {
      splitLetters(heroNames);
    }

    // 2. Refined Hero Kinetic Layers: Drifting Rose Petals & Subtle Golden Dust Motes
    var heroEl =
      scope.querySelector(".pf-hero") ||
      scope.querySelector("#pembuka") ||
      document.getElementById("pembuka");
    if (heroEl) {
      if (heroEl.dataset.pfDiorama !== "1") {
        heroEl.dataset.pfDiorama = "1";

        var dolly = heroEl.querySelector(".pf-hero-dolly") || heroEl;
        var heroContent = dolly.querySelector(".pf-hero-content");
        var insertBeforeContent = function (node) {
          if (heroContent && heroContent.parentNode === dolly) {
            dolly.insertBefore(node, heroContent);
          } else {
            dolly.appendChild(node);
          }
        };

        // Delicate drifting velvet rose petals on open
        if (!dolly.querySelector(".br-hero-petals")) {
          var heroPetals = el("div", "br-hero-petals");
          heroPetals.setAttribute("aria-hidden", "true");
          var petalSpecs = [
            { left: "12%", size: "18px", petal: "0%",   drift: "28px",  delay: "0.55s", dur: "4.6s" },
            { left: "28%", size: "21px", petal: "50%",  drift: "-30px", delay: "0.88s", dur: "4.2s" },
            { left: "48%", size: "15px", petal: "100%", drift: "38px",  delay: "0.75s", dur: "4.8s" },
            { left: "70%", size: "19px", petal: "0%",   drift: "-34px", delay: "0.68s", dur: "4.5s" },
            { left: "86%", size: "16px", petal: "50%",  drift: "-22px", delay: "1.02s", dur: "4.3s" }
          ];
          petalSpecs.forEach(function (ps) {
            var sp = el("span");
            sp.style.setProperty("--left", ps.left);
            sp.style.setProperty("--size", ps.size);
            sp.style.setProperty("--petal", ps.petal);
            sp.style.setProperty("--drift", ps.drift);
            sp.style.setProperty("--delay", ps.delay);
            sp.style.setProperty("--duration", ps.dur);
            heroPetals.appendChild(sp);
          });
          insertBeforeContent(heroPetals);
        }
      }

      if (!heroEl.querySelector(".pf-hero-motes")) {
        heroEl.appendChild(createMotes(8, "pf-hero-motes"));
      }

      // 3. Hero Scroll Parallax
      var depthNodes = Array.prototype.slice.call(heroEl.querySelectorAll("[data-depth]"));
      if (depthNodes.length) {
        if (typeof activeParallaxCleanup === "function") {
          activeParallaxCleanup();
        }
        var ticking = false;
        var updateParallax = function () {
          ticking = false;
          var maxH = heroEl.offsetHeight || window.innerHeight || 700;
          var y = Math.max(0, Math.min(window.scrollY || window.pageYOffset || 0, maxH));
          for (var i = 0; i < depthNodes.length; i++) {
            var node = depthNodes[i];
            var depth = parseFloat(node.getAttribute("data-depth")) || 0;
            node.style.transform = "translate3d(0, " + (y * depth).toFixed(1) + "px, 0)";
          }
        };
        var onScroll = function () {
          if (!ticking) {
            ticking = true;
            requestAnimationFrame(updateParallax);
          }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        activeParallaxCleanup = function () {
          window.removeEventListener("scroll", onScroll);
        };
      }
    }

    // 4. Falling Velvet Rose Petals in #penutup
    var penutup = scope.querySelector("#penutup") || document.getElementById("penutup");
    if (penutup) {
      var petalsHost = penutup.querySelector(".pf-petals");
      if (!petalsHost) {
        petalsHost = el("div", "pf-petals");
        petalsHost.setAttribute("aria-hidden", "true");
        penutup.appendChild(petalsHost);
      }
      if (!petalsHost.children.length) {
        for (var p = 0; p < 14; p++) {
          var petal = el("i");
          petal.style.setProperty("--x", Math.round(Math.random() * 94 + 3) + "%");
          petal.style.setProperty("--s", (8 + Math.random() * 8).toFixed(1) + "px");
          petal.style.setProperty("--dur", (8 + Math.random() * 6).toFixed(1) + "s");
          petal.style.setProperty("--delay", (-Math.random() * 12).toFixed(1) + "s");
          petal.style.setProperty("--drift", Math.round(Math.random() * 72 - 36) + "px");
          petal.style.setProperty("--c", PETAL_COLORS[p % PETAL_COLORS.length]);
          petalsHost.appendChild(petal);
        }
      }
      if (typeof IntersectionObserver === "function" && penutup.dataset.pfPetalObs !== "1") {
        penutup.dataset.pfPetalObs = "1";
        var petalObs = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            penutup.classList.toggle("is-live", entry.isIntersecting);
            penutup.classList.toggle("live", entry.isIntersecting);
          });
        }, { threshold: 0.05 });
        petalObs.observe(penutup);
      } else {
        penutup.classList.add("is-live", "live");
      }
    }
  }

  document.addEventListener("lk:names-updated", function (e) {
    updateAllCoupleNames(e && e.detail);
  });

  window.LKThemes.register("burgundy-roses", {
    id: "burgundy-roses",
    name: "Burgundy Roses",
    assets: ASSETS,

    tokens: {
      bg: "#F5EFE6",
      surface: "#FAF7F2",
      burgundy: "#580E1D",
      burgundyMid: "#6E1628",
      burgundyDeep: "#320610",
      burgundyNight: "#180308",
      olive: "#566348",
      oliveDeep: "#3D4832",
      ink: "#2A1B1D",
      inkMuted: "#614D50",
      rose: "#B54D58",
      blush: "#D6AEB5",
      gold: "#B89458",
      goldLight: "#E8D7BC",
      fontDidone: '"Bodoni Moda", "Didot", Georgia, serif',
      fontDisplay: '"Cormorant Garamond", Georgia, serif',
      fontScript: '"Pinyon Script", cursive',
      fontBody: '"Plus Jakarta Sans", system-ui, sans-serif'
    },

    labels: {
      credit_line: "Dirangkai, ditulis, dan disegel dengan sepenuh hati oleh",
      open_button: "Buka Undangan",
      skip_button: "Lewati",
      couple_title: "Mempelai",
      events_title: "Waktu & Tempat",
      dress_code_title: "Dress Code",
      story_title: "Kisah Kami",
      gallery_title: "Galeri",
      rsvp_title: "Konfirmasi Kehadiran",
      wishes_title: "Doa & Ucapan",
      gift_title: "Tanda Kasih",
      closing_title: "Terima Kasih",
      closing: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.",
      closing_signoff: "Kami yang berbahagia,",
      to_prefix: "Kepada Yth. Bapak/Ibu/Saudara/i"
    },

    section_order: [
      "pembuka",
      "ayat",
      "mempelai",
      "acara",
      "dresscode",
      "cerita",
      "galeri",
      "hadiah",
      "rsvp",
      "penutup"
    ],

    opener: opener,
    aside: aside,
    ornaments: ornaments,
    enhanceMotion: enhanceMotion
  });
})();

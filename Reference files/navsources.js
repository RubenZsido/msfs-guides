

/** These are the fields that should be exposed by NavSources and NavIndicators.
 * Not all fields will be used by all the different Nav Sources.
 * To add a new field, just add it to NavBaseFields,
 * then add some code to each of the different NavSources to keep that field updated.
 * Don't use this class directly.
 * Every Subject should be able to be set to null, so that when the source is set to null, all the fields cna be nulled.
 * This isn't abstract so that we can instantiate it in one place to help generate setters.  * @license no license */
/**
 * Class representing navigation fields used by NavSources and NavIndicators
 * @example
 * // Create a new NavBaseFields instance
 * const navFields = new NavBaseFields();
 * 
 * // Subscribe to bearing changes
 * navFields.bearing.sub((bearing: number | null) => {
 *   if (bearing !== null) {
 *     console.log(`Current bearing: ${bearing}`); 
 *   }
 * });
 * 
 * // Set navigation values
 * navFields.bearing.set(45);
 * navFields.course.set(360);
 * navFields.ident.set('KSEA');
 * 
 * // Check nav signal validity
 * if (navFields.hasNav.get()) {
 *   const distance = navFields.distance.get();
 *   if (distance !== null) {
 *     console.log(`Distance to waypoint: ${distance}nm`);
 *   }
 * }
 * 
 * // Handle localizer
 * if (navFields.isLocalizer.get() && navFields.hasLocalizer.get()) {
 *   const locCourse = navFields.localizerCourse.get();
 *   if (locCourse !== null) {
 *     console.log(`Localizer course: ${locCourse}°`);
 *   }
 * }
 * @license no license
 */
class NavBaseFields {
  constructor() {
    /** Always points to the curently tuned station or next waypoint/fix.
     * NAV RADIAL, ADF RADIAL  * @license no license */
    this.bearing = Subject.create(null);
    /** Either points towards the next waypoint (GPS/FMS),
     * displays the course selected by the course knob (VOR),
     * or displays the fixed course of a localizer (ILS).
     * NAV OBS, L:WTAP_LNav_DTK_Mag  * @license no license */
    this.course = Subject.create(null);
    /** The fixed course of a localizer when available (ILS).
     * Is null when `hasLocalizer` is false.
     * Only for NAV source types.
     * NAV LOCALIZER  * @license no license */
    this.localizerCourse = Subject.create(null);
    /** Whether the tuned station is a localizer or not.
     * This can be true even if `hasLocalizer` is false,
     * because this can be based on the frequency alone.
     * Only for NAV source types.
     * NAV LOCALIZER.  * @license no license */
    this.isLocalizer = Subject.create(null);
    /** Whether the nav source is receiving a valid localizer signal.
     * Only for NAV source types.
     * NAV HAS LOCALIZER  * @license no license */
    this.hasLocalizer = Subject.create(null);
    /** DME, distance to the station or next waypoint.
     * Is null when source is NAV and `hasDme` is false.
     * NAV DME, ADF DISTANCE, L:WTAP_LNav_DIS  * @license no license */
    this.distance = Subject.create(null);
    /** Whether the source is receiving a valid DME signal.
     * Only for NAV source types.
     * NAV HAS DME  * @license no license */
    this.hasDme = Subject.create(null);
    /** The ICAO ident of the station or waypoint.
     * NAV IDENT, or flight plan  * @license no license */
    this.ident = Subject.create(null);
    /** Whether the source is receiving a nav signal.
     * Only for NAV source types.
     * NAV HAS NAV.  * @license no license */
    this.hasNav = Subject.create(null);
    /** The active frequency that the nav source is tuned to.
     * Only for NAV and ADF source types.
     * NAV ACTIVE FREQUENCY, ADF ACTIVE FREQUENCY.  * @license no license */
    this.activeFrequency = Subject.create(null);
    /** Normalized and scaled lateral deviation (-1, 1).
     * NAV CDI, L:WTAP_LNav_XTK  * @license no license */
    this.lateralDeviation = Subject.create(null);
    /** Normalized and scaled vertical deviation (-1, 1).
     * NAV GLIDE SLOPE ERROR, L:WTAP_VNav_Vertical_Deviation, L:WTAP_LPV_Vertical_Deviation  * @license no license */
    this.verticalDeviation = Subject.create(null);
    /** Whether the source is receiving glideslope information.
     * Only for NAV source types.
     * NAV HAS GLIDE SLOPE.  * @license no license */
    this.hasGlideSlope = Subject.create(null);
    /** TTG, estimated time remaining until aircraft reaches next fix. // TODO Implement this  * @license no license */
    this.timeToGo = Subject.create(null);
    /** Whether course is pointing TO or FROM the station (VOR),
     * or if the aircraft heading is within 90 degress of the desired track (GPS).
     * NAV TOFROM, // TODO FMS VAR?  * @license no license */
    this.toFrom = Subject.create(null);
    /** The current CDI scale, in nautical miles.
     * Only for GPS source types.
     * L:WTAP_LNav_CDI_Scale  * @license no license */
    this.lateralDeviationScaling = Subject.create(null);
    /** A readable string/enum that shows the name of current scaling being applied to lateral deviation.
     * Only for GPS source types.
     * L:WTAP_LNav_CDI_Scale_Label  * @license no license */
    this.lateralDeviationScalingLabel = Subject.create(null);
  }
}
/** Generates event types for each field.  * @license no license */
/** Generates control event types for each field.  * @license no license */
/** Base class for NavSourceBase and NavIndicator.  * @license no license */
class NavBase extends NavBaseFields {
  /** Creates a Map of setters to make unsubbing and subbing easy.  * @license no license */
  constructor() {
    super();
    /** An automatically generated map of setters to make it easy to set, sub, and unsub,
     * getting around having to call .bind().  * @license no license */
    this.setters = /* @__PURE__ */ new Map();
    Object.keys(new NavBaseFields()).forEach((key) => {
      this.setters.set(key, { setter: this[key].set.bind(this[key]) });
    });
  }
}

[new GeoPoint(0, 0)];
[new GeoCircle(new Float64Array(3), 0)];
/**
 * Utility method to return a single RnavTypeFlag from multiple possible flags.
 * @param rnavTypeFlags The input RnavTypeFlags.
 * @returns A single RnavTypeFlag
  * @license no license */
ApproachUtils.getBestRnavType;
NumberFormatter.create({ precision: 0.1, maxDigits: 3, forceDecimalZeroes: true, nanString: " " });
/** Array of "heading to" leg types.  * @license no license */
[LegType.VA, LegType.VD, LegType.VI, LegType.VM, LegType.VR];
/** Array of "hold at" leg types.  * @license no license */
[LegType.HA, LegType.HF, LegType.HM];
/** Array of "to altitude" leg types.  * @license no license */
[LegType.CA, LegType.FA, LegType.VA];
/** Array of "course to" leg types.  * @license no license */
[LegType.CF];
/**
 * Array of "discontinuity" leg types
  * @license no license */
[LegType.Discontinuity, LegType.ThruDiscontinuity];
/** Leg types where the leg course should be shown instead of the initial dtk.  * @license no license */
[
  LegType.CA,
  LegType.CD,
  LegType.CF,
  LegType.CI,
  LegType.CR,
  LegType.FM,
  LegType.VA,
  LegType.VD,
  LegType.VI,
  LegType.VM,
  LegType.VR
];
/** Array of "vectors" leg types  * @license no license */
[LegType.FM, LegType.VM];

const navigationSettings = [
  {
    name: "lastFmsPos",
    defaultValue: "0,0"
  },
  {
    name: "advisoryVnavEnabled",
    defaultValue: true
  },
  {
    name: "bearingPointer1Source",
    defaultValue: false
  },
  {
    name: "bearingPointer2Source",
    defaultValue: false
  }
];
/** Generates the UserSettingDefinition type based on the settings object  * @license no license */
/** Utility class for retrieving the navigation user setting managers.  * @license no license */
class WT21NavigationUserSettings {
  /**
   * Retrieves a manager for navigation user settings.
   * @param bus The event bus.
   * @returns a manager for navigation user settings.
    * @license no license */
  static getManager(bus) {
    var _a;
    return (_a = WT21NavigationUserSettings.INSTANCE) != null ? _a : WT21NavigationUserSettings.INSTANCE = new DefaultUserSettingManager(bus, navigationSettings);
  }
}

/** NavBaseFields plus NavIndicator specific fields.  * @license no license */
/** Just the fields that can have control events generated for them.  * @license no license */
/** Field changed events for NavIndicator fields.  * @license no license */
/** Control events for changing field values of a NavIndicator.  * @license no license */
/**
 * Represents a navigation indicator like a course needle or bearing pointer.
 * Can only be pointed to one navigation source at a time.
 * 
 * Provides a single subscription point for visual components while allowing easy source switching.
 * 
 * @example
 * // Create nav sources
 * const navSources = new NavSources(
 *   new NavRadioNavSource(bus, 'NAV', 1),
 *   new NavRadioNavSource(bus, 'NAV', 2)
 * );
 * 
 * // Create a course needle indicator
 * const courseNeedle = new NavIndicator(navSources, 'NAV1');
 * 
 * // Switch the source
 * courseNeedle.setSource('NAV2');
 * 
 * // Remove the source
 * courseNeedle.setSource(null);
 * 
 * // Subscribe to indicator changes
 * courseNeedle.bearing.sub((v) => {
 *   // Update display with new bearing value
 * });
  * @license no license */
class NavIndicator extends NavBase {
  /** NavIndicator constructor.
   * @param navSources The possible nav sources that could be pointed to.
   * @param sourceName The initial source to use, if any.
    * @license no license */
  constructor(navSources, sourceName = null) {
    super();
    this.navSources = navSources;
    this._source = Subject.create(null);
    /** The nav source that is feeding data into the indicator fields.
     * Can only be changed with the {@link setSource} function.  * @license no license */
    this.source = this._source;
    this.setSource(sourceName);
  }
  /** Changes the source of this indicator.
   * All subjects will be republished with the current info from the new source.
   * @param newSourceName Name of new source, if any.
    * @license no license */
  setSource(newSourceName) {
    const oldSource = this.source.get();
    if (oldSource && oldSource.name === newSourceName) {
      return;
    }
    if (oldSource === null && newSourceName === null) {
      return;
    }
    const newSource = newSourceName ? this.navSources.get(newSourceName) : null;
    if (oldSource) {
      this.setters.forEach((setter) => {
        if (setter.sub) {
          setter.sub.destroy();
          setter.sub = void 0;
        }
      });
    }
    this._source.set(newSource);
    if (newSource) {
      this.setters.forEach((setter, key) => {
        setter.sub = newSource[key].sub(setter.setter, true);
      });
    } else {
      this.setters.forEach((setter) => {
        setter.setter(null);
      });
    }
  }
}
/** Holds the nav indicators.  * @license no license */
class NavIndicators {
  /** NavIndicators constructor.
   * @param indicators The nav indicators to hold.  * @license no license */
  constructor(indicators = /* @__PURE__ */ new Map()) {
    this.indicators = indicators;
  }
  /** @inheritdoc  * @license no license */
  init() {
  }
  /** @inheritdoc  * @license no license */
  onUpdate() {
  }
  /** Gets a nav indicator.
   * @param key The name of the indicator to get.
   * @returns The indicator.
   * @throws Error if indicator not found.
    * @license no license */
  get(key) {
    const indicator = this.indicators.get(key);
    if (!indicator) {
      throw new Error("no nav indicator exists with given key: " + key);
    } else {
      return indicator;
    }
  }
}

/** MessageDefinition  * @license no license */
class MessageDefinition {
  // eslint-disable-next-line jsdoc/require-jsdoc
  constructor(text, target) {
    this.text = text;
    this.target = target;
  }
}
/** An enumeration for WT21 message target displays  * @license no license */
var MESSAGE_TARGET = /* @__PURE__ */ ((MESSAGE_TARGET2) => {
  MESSAGE_TARGET2[MESSAGE_TARGET2["FMC"] = 0] = "FMC";
  MESSAGE_TARGET2[MESSAGE_TARGET2["PFD_TOP"] = 1] = "PFD_TOP";
  MESSAGE_TARGET2[MESSAGE_TARGET2["PFD_BOT"] = 2] = "PFD_BOT";
  MESSAGE_TARGET2[MESSAGE_TARGET2["MAP_MID"] = 3] = "MAP_MID";
  MESSAGE_TARGET2[MESSAGE_TARGET2["MFD_TOP"] = 4] = "MFD_TOP";
  return MESSAGE_TARGET2;
})(MESSAGE_TARGET || {});
/**
 * Enumeration of message levels
 * Higher numbers are higher priority
  * @license no license */
var MESSAGE_LEVEL = /* @__PURE__ */ ((MESSAGE_LEVEL2) => {
  MESSAGE_LEVEL2[MESSAGE_LEVEL2["White"] = 0] = "White";
  MESSAGE_LEVEL2[MESSAGE_LEVEL2["Yellow"] = 1] = "Yellow";
  return MESSAGE_LEVEL2;
})(MESSAGE_LEVEL || {});

/** OperatingMessage  * @license no license */
class OperatingMessage {
  // eslint-disable-next-line jsdoc/require-jsdoc
  constructor(_msgDefs, _level, _weight) {
    this._msgDefs = _msgDefs;
    this._level = _level;
    this._weight = _weight;
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  get msgDefs() {
    return this._msgDefs;
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  get level() {
    return this._level;
  }
  // eslint-disable-next-line jsdoc/require-jsdoc
  get weight() {
    return this._weight;
  }
}

/* @__PURE__ */ new Map([
  [0 /* RESET_INITIAL_POS */, new OperatingMessage(
    [new MessageDefinition("RESET INITIAL POS", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.Yellow,
    60
  )],
  [1 /* INITIALIZE_POSITION */, new OperatingMessage(
    [new MessageDefinition("INITIALIZE POSITION", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.Yellow,
    50
  )],
  [2 /* NO_FLIGHT_PLAN */, new OperatingMessage(
    [
      new MessageDefinition("NO FLIGHT PLAN", MESSAGE_TARGET.FMC),
      new MessageDefinition("NO FLIGHT PLAN", MESSAGE_TARGET.MAP_MID)
    ],
    MESSAGE_LEVEL.White,
    20
  )],
  [3 /* FPLN_DISCONTINUITY */, new OperatingMessage(
    [new MessageDefinition("FPLN DISCONTINUITY", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.Yellow,
    90
  )],
  [4 /* DISCONTINUITY */, new OperatingMessage(
    [new MessageDefinition("DISCONTINUITY", MESSAGE_TARGET.MAP_MID)],
    MESSAGE_LEVEL.White,
    90
  )],
  [5 /* CHECK_SPEED */, new OperatingMessage(
    [
      new MessageDefinition("CHECK SPEED", MESSAGE_TARGET.FMC),
      new MessageDefinition("SPD", MESSAGE_TARGET.PFD_BOT)
    ],
    MESSAGE_LEVEL.Yellow,
    80
  )],
  [6 /* CHK_ALT_SEL */, new OperatingMessage(
    [new MessageDefinition("CHECK ALT SEL", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.White,
    70
  )],
  [7 /* HOLD */, new OperatingMessage(
    [new MessageDefinition("HOLD", MESSAGE_TARGET.PFD_BOT)],
    MESSAGE_LEVEL.White,
    70
  )],
  [8 /* TOD */, new OperatingMessage(
    [new MessageDefinition("TOD", MESSAGE_TARGET.PFD_BOT)],
    MESSAGE_LEVEL.White,
    50
  )],
  [9 /* OCEANIC */, new OperatingMessage(
    [new MessageDefinition("OCEANIC", MESSAGE_TARGET.PFD_TOP)],
    MESSAGE_LEVEL.White,
    49
  )],
  [10 /* TERM */, new OperatingMessage(
    [new MessageDefinition("TERM", MESSAGE_TARGET.PFD_TOP)],
    MESSAGE_LEVEL.White,
    50
  )],
  [11 /* LV_TERM */, new OperatingMessage(
    [new MessageDefinition("L/V TERM", MESSAGE_TARGET.PFD_TOP)],
    MESSAGE_LEVEL.White,
    51
  )],
  [12 /* LPV_TERM */, new OperatingMessage(
    [new MessageDefinition("LPV TERM", MESSAGE_TARGET.PFD_TOP)],
    MESSAGE_LEVEL.White,
    52
  )],
  [13 /* APPR */, new OperatingMessage(
    [new MessageDefinition("APPR", MESSAGE_TARGET.PFD_TOP)],
    MESSAGE_LEVEL.White,
    53
  )],
  [14 /* GPS_APPR */, new OperatingMessage(
    [new MessageDefinition("GPS APPR", MESSAGE_TARGET.PFD_TOP)],
    MESSAGE_LEVEL.White,
    54
  )],
  [15 /* LV_APPR */, new OperatingMessage(
    [new MessageDefinition("L/V APPR", MESSAGE_TARGET.PFD_TOP)],
    MESSAGE_LEVEL.White,
    55
  )],
  [16 /* LPV_APPR */, new OperatingMessage(
    [new MessageDefinition("LPV APPR", MESSAGE_TARGET.PFD_TOP)],
    MESSAGE_LEVEL.White,
    56
  )],
  [17 /* SEQ_INHB */, new OperatingMessage(
    [new MessageDefinition("SEQ INHB", MESSAGE_TARGET.PFD_TOP)],
    MESSAGE_LEVEL.White,
    60
  )],
  [18 /* LOC_WILL_BE_TUNED */, new OperatingMessage(
    [new MessageDefinition("LOC WILL BE TUNED", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.White,
    50
  )],
  [19 /* CHECK_LOC_TUNING */, new OperatingMessage(
    [new MessageDefinition("CHECK LOC TUNING", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.White,
    75
  )],
  [20 /* PATH_BELOW_AC */, new OperatingMessage(
    [new MessageDefinition("PATH BELOW A/C", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.White,
    61
  )],
  [21 /* NO_VPATH_VECTORS */, new OperatingMessage(
    [new MessageDefinition("NO VPATH-VECTORS", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.White,
    62
  )],
  [22 /* NO_VPATH_CONDITION */, new OperatingMessage(
    [new MessageDefinition("NO VPATH CONDITION", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.White,
    63
  )],
  [23 /* NO_VPATH_PILOT_CMD */, new OperatingMessage(
    [new MessageDefinition("NO VPATH-PILOT CMD", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.White,
    64
  )],
  [24 /* NO_VPATH_TAE */, new OperatingMessage(
    [new MessageDefinition("NO VPATH-TAE", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.White,
    65
  )],
  [25 /* NO_VPATH_XTK */, new OperatingMessage(
    [new MessageDefinition("NO VPATH-XTK", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.White,
    66
  )],
  [26 /* NO_VPATH_THIS_LEG */, new OperatingMessage(
    [new MessageDefinition("NO VPATH THIS LEG", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.White,
    67
  )],
  [27 /* CHECK_FPLN_ALT */, new OperatingMessage(
    [new MessageDefinition("CHECK FPLN ALT", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.White,
    68
  )],
  [28 /* DECELERATE */, new OperatingMessage(
    [new MessageDefinition("DECELERATE", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.White,
    69
  )],
  [29 /* UNABLE_NEXT_ALT */, new OperatingMessage(
    [new MessageDefinition("UNABLE NEXT ALT", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.Yellow,
    70
  )],
  [30 /* KBINPUTACTIVE */, new OperatingMessage(
    [new MessageDefinition("KB INPUT ACTIVE", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.White,
    999
  )],
  [31 /* DLFPLNLOADED */, new OperatingMessage(
    [new MessageDefinition("DL FPLN LOADED", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.White,
    999
  )],
  [32 /* DLFPLNFAIL */, new OperatingMessage(
    [new MessageDefinition("DL FPLN FAILED", MESSAGE_TARGET.FMC)],
    MESSAGE_LEVEL.Yellow,
    999
  )]
]);

/** Base class for NavSources that are meant to be used by NavIndicators.
 * A NavSource subscribes to SimVars and updates the NavBaseFields accordingly.  * @license no license */
class NavSourceBase extends NavBase {
  /** The NavSourceBase constructor.
   * @param bus The event bus.
   * NavSources need to tell the publisher what to subscribe to.
   * @param name The name of the nav source. Ex: NAV1, ADF, FMS2.
   * @param index The index of the nav source. Ex: 1 for NAV1, or 2 for FMS2, or 1 for ADF.
    * @license no license */
  constructor(bus, name, index) {
    super();
    this.bus = bus;
    this.name = name;
    this.index = index;
  }
}
/** Holds the available Nav Sources that NavIndicators can use.
 * Acts as a registry to store and retrieve navigation sources like NAV, ADF, FMS etc.
 * 
 * Example usage:
 * ```typescript
 * const navSources = new NavSources(nav1Source, nav2Source, adfSource);
 * 
 * // Get NAV1 source
 * const nav1 = navSources.get('NAV1');
 * 
 * // Get ADF source
 * const adf = navSources.get('ADF');
 * ```
  * @license no license */
class NavSources {
  /** NavSources constructor.
   * @param sources The nav sources.  * @license no license */
  constructor(...sources) {
    this.sources = sources;
  }
  /** @inheritdoc  * @license no license */
  init() {
  }
  /** @inheritdoc  * @license no license */
  onUpdate() {
  }
  /** Gets a nav source.
   * @param name Name of source.
   * @returns The source.
   * @throws Error if name not found.
    * @license no license */
  get(name) {
    const indicator = this.sources.find((x) => x.name === name);
    if (!indicator) {
      throw new Error("no nav source exists with given name: " + name);
    } else {
      return indicator;
    }
  }
}

/** Represents an ADF radio, subscribes to the ADF SimVars.  * @license no license */
class AdfRadioSource extends NavSourceBase {
  /** @inheritdoc  * @license no license */
  constructor(bus, name, index) {
    super(bus, name, index);
    this.heading = Subject.create(0);
    this.adfRadial = Subject.create(0);
    this.adfSignal = Subject.create(0);
    this.updateBearing = () => {
      if (this.adfSignal.get() === 0) {
        this.bearing.set(null);
      } else {
        const newBearing = this.adfRadial.get() + this.heading.get();
        this.bearing.set(newBearing);
      }
    };
    const adc = this.bus.getSubscriber();
    adc.on("heading").withPrecision(2).handle(this.heading.set.bind(this.heading));
    const navComSubscriber = this.bus.getSubscriber();
    navComSubscriber.on(`adf_bearing_${index}`).withPrecision(2).handle(this.adfRadial.set.bind(this.adfRadial));
    navComSubscriber.on(`adf_signal_${index}`).withPrecision(0).handle((signal) => {
      this.adfSignal.set(signal);
      this.hasNav.set(signal > 1);
    });
    const navComSimVarsSubscriber = this.bus.getSubscriber();
    navComSimVarsSubscriber.on(`adf_active_frequency_${index}`).whenChanged().handle(this.activeFrequency.set.bind(this.activeFrequency));
    this.heading.sub(this.updateBearing);
    this.adfRadial.sub(this.updateBearing);
    this.adfSignal.sub(this.updateBearing);
  }
  /** @inheritdoc  * @license no license */
  getType() {
    return NavSourceType.Adf;
  }
}

/**
 * GpsSource Class Documentation
 * 
 * A GPS/FMS navigation source that handles both lateral (LNAV) and vertical (VNAV) navigation data.
 * Extends NavSourceBase to provide GPS-specific navigation functionality.
 * 
 * @template T - Tuple type of readonly strings for nav source names
 * 
 * @example
 * // Initialize required dependencies
 * const bus = new EventBus();
 * const flightPlanner = new FlightPlanner();
 * 
 * // Create GPS source instance
 * const gpsSource = new GpsSource(
 *   bus,
 *   'GPS',  // name
 *   flightPlanner
 * );
 * 
 * // Access navigation data
 * gpsSource.bearing.sub((brg) => console.log('Current bearing:', brg));
 * gpsSource.distance.sub((dist) => console.log('Distance to waypoint:', dist));
 * gpsSource.course.sub((crs) => console.log('Current course:', crs));
 * 
 * @properties
 * - bearing: Current magnetic bearing to waypoint
 * - distance: Distance to active waypoint
 * - course: Current desired track
 * - lateralDeviation: Cross-track error (-1 to 1)
 * - verticalDeviation: Vertical deviation (-1 to 1)
 * - ident: Active waypoint identifier
 * 
 * @events
 * Subscribes to:
 * - LNAV events: tracking, bearing, distance, course, XTK
 * - VNAV events: vertical deviation, approach mode, path status
 * 
 * @implementation
 * The class handles:
 * - Lateral navigation (LNAV) tracking and deviations
 * - Vertical navigation (VNAV) including precision approaches
 * - Automatic scaling of deviation indicators
 * - Waypoint identification and tracking
 * 
 * @license no license
 */
class GpsSource extends NavSourceBase {
  /** 
   * @inheritdoc
   * @example
   * // Create GPS source instance
   * const bus = new EventBus();
   * const flightPlanner = new FlightPlanner(...);
   * const gpsSource = new GpsSource(bus, 'GPS', 1, flightPlanner);
   * 
   * // Subscribe to navigation data
   * gpsSource.bearing.sub(brg => {
   *   if (brg !== null) {
   *     console.log(`Current bearing: ${brg}°`);
   *   }
   * });
   * @license no license
   */
  constructor(bus, name, index, flightPlanner) {
    super(bus, name, index);
    this.flightPlanner = flightPlanner;
    this.lnavIsTracking = Subject.create(false);
    this.lnavBrgMag = Subject.create(0);
    this.lnavDis = Subject.create(0);
    this.lnavDtkMag = Subject.create(0);
    this.lnavXtk = Subject.create(0);
    this.vnavVDev = Subject.create(0);
    this.vnavLpvVDev = Subject.create(0);
    this.vnavState = Subject.create(VNavState.Disabled);
    this.vnavApproachMode = Subject.create(ApproachGuidanceMode.None);
    this.vnavPathAvailable = Subject.create(false);
    this.advisoryVnavSetting = WT21NavigationUserSettings.getManager(this.bus).getSetting("advisoryVnavEnabled");
    this.updateBearing = () => {
      if (!this.lnavIsTracking.get()) {
        this.bearing.set(null);
      } else {
        this.bearing.set(this.lnavBrgMag.get());
      }
    };
    this.updateDistance = () => {
      if (!this.lnavIsTracking.get()) {
        this.distance.set(null);
      } else {
        this.distance.set(this.lnavDis.get());
      }
    };
    this.updateCourse = () => {
      if (!this.lnavIsTracking.get()) {
        this.course.set(null);
      } else {
        this.course.set(this.lnavDtkMag.get());
      }
    };
    this.updateLateralDeviation = () => {
      const scaling = this.lateralDeviationScaling.get();
      if (!this.lnavIsTracking.get() || scaling === null) {
        this.lateralDeviation.set(null);
      } else {
        const xtk = this.lnavXtk.get();
        const newDeviation = NavMath.clamp(xtk / scaling, -1, 1);
        this.lateralDeviation.set(-newDeviation);
      }
    };
    this.updateVerticalDeviation = () => {
      const lpvVDev = this.vnavLpvVDev.get();
      const gpAvailable = lpvVDev >= -1e3 && lpvVDev <= 1e3;
      const isVNavModeDisabled = this.vnavState.get() <= VNavState.Enabled_Inactive;
      const showVnavVdev = this.vnavPathAvailable.get() && (!isVNavModeDisabled || this.advisoryVnavSetting.value);
      let vdev = showVnavVdev ? this.vnavVDev.get() : null;
      const isGpActiveApproachMode = this.vnavApproachMode.get() === ApproachGuidanceMode.GPActive;
      if (isGpActiveApproachMode || isVNavModeDisabled && gpAvailable) {
        vdev = lpvVDev;
      }
      if (vdev === null) {
        this.verticalDeviation.set(null);
        return;
      }
      const newDeviation = NavMath.clamp(vdev / -750, -1, 1);
      this.verticalDeviation.set(newDeviation);
    };
    this.handleEffectiveLegIndex = (effectiveLegIndex) => {
      if (this.flightPlanner.hasFlightPlan(0) && effectiveLegIndex >= 0) {
        const plan = this.flightPlanner.getFlightPlan(0);
        const leg = plan.tryGetLeg(effectiveLegIndex);
        this.ident.set((leg == null ? void 0 : leg.name) || null);
      } else {
        this.ident.set(null);
      }
    };
    const lnav = this.bus.getSubscriber();
    lnav.on("lnav_is_tracking").whenChanged().handle(this.lnavIsTracking.set.bind(this.lnavIsTracking));
    lnav.on("lnavdata_waypoint_bearing_mag").whenChanged().handle(this.lnavBrgMag.set.bind(this.lnavBrgMag));
    lnav.on("lnavdata_waypoint_distance").whenChanged().handle(this.lnavDis.set.bind(this.lnavDis));
    lnav.on("lnavdata_dtk_mag").whenChanged().handle(this.lnavDtkMag.set.bind(this.lnavDtkMag));
    lnav.on("lnavdata_xtk").whenChanged().handle(this.lnavXtk.set.bind(this.lnavXtk));
    lnav.on("lnavdata_cdi_scale").whenChanged().handle(this.setters.get("lateralDeviationScaling").setter);
    lnav.on("lnavdata_cdi_scale_label").whenChanged().handle(this.setters.get("lateralDeviationScalingLabel").setter);
    lnav.on("lnavdata_nominal_leg_index").whenChanged().handle(this.handleEffectiveLegIndex);
    this.lnavIsTracking.sub(this.updateBearing);
    this.lnavBrgMag.sub(this.updateBearing);
    this.lnavIsTracking.sub(this.updateDistance);
    this.lnavDis.sub(this.updateDistance);
    this.lnavIsTracking.sub(this.updateCourse);
    this.lnavDtkMag.sub(this.updateCourse);
    this.lnavIsTracking.sub(this.updateLateralDeviation);
    this.lnavXtk.sub(this.updateLateralDeviation);
    this.lateralDeviationScaling.sub(this.updateLateralDeviation);
    const vnav = this.bus.getSubscriber();
    vnav.on("vnav_vertical_deviation").whenChangedBy(1).handle(this.vnavVDev.set.bind(this.vnavVDev));
    vnav.on("gp_vertical_deviation").whenChangedBy(1).handle(this.vnavLpvVDev.set.bind(this.vnavLpvVDev));
    vnav.on("vnav_state").whenChanged().handle(this.vnavState.set.bind(this.vnavState));
    vnav.on("gp_approach_mode").whenChanged().handle(this.vnavApproachMode.set.bind(this.vnavApproachMode));
    vnav.on("vnav_path_available").whenChanged().handle(this.vnavPathAvailable.set.bind(this.vnavPathAvailable));
    this.vnavVDev.sub(this.updateVerticalDeviation);
    this.vnavLpvVDev.sub(this.updateVerticalDeviation);
    this.vnavState.sub(this.updateVerticalDeviation);
    this.vnavApproachMode.sub(this.updateVerticalDeviation);
    this.vnavPathAvailable.sub(this.updateVerticalDeviation);
  }
  /** @inheritdoc  * @license no license */
  getType() {
    return NavSourceType.Gps;
  }
}

/** Represents a NAV radio, subscribes to the NAV SimVars.  * @license no license */
class NavRadioNavSource extends NavSourceBase {
  /** @inheritdoc  * @license no license */
  constructor(bus, name, index) {
    super(bus, name, index);
    this.glideSlopeErrorDegrees = Subject.create(0);
    this.navLocalizerCrsRad = Subject.create(0);
    this.navCdi = Subject.create(0);
    this.navDme = Subject.create(0);
    this.navRadial = Subject.create(0);
    this.updateDistance = () => {
      this.distance.set(this.hasDme.get() ? this.navDme.get() : null);
    };
    this.updateIsLocalizer = () => {
      var _a;
      const navHasLocalizer = this.hasLocalizer.get();
      const _isLocalizerFrequency = RadioUtils.isLocalizerFrequency((_a = this.activeFrequency.get()) != null ? _a : 0);
      this.isLocalizer.set(navHasLocalizer || _isLocalizerFrequency);
    };
    this.updateLocalizerCourse = () => {
      this.localizerCourse.set(
        this.hasLocalizer.get() ? this.navLocalizerCrsRad.get() * Avionics.Utils.RAD2DEG : null
      );
    };
    /** The user may change the course manually after slewing, this is fine.
     * It won't affect guidance or the deviation indicators.  * @license no license */
    this.trySlewObs = () => {
      const course = this.localizerCourse.get();
      if (this.hasLocalizer.get() && course !== null) {
        SimVar.SetSimVarValue(`K:VOR${this.index}_SET`, "number", Math.round(course));
      }
    };
    this.updateVerticalDeviation = () => {
      this.verticalDeviation.set(this.getVerticalDeviation());
    };
    this.updateBearing = () => {
      if (!this.hasNav.get()) {
        this.bearing.set(null);
      } else {
        const radialDegrees = this.navRadial.get();
        const bearing = (radialDegrees + 180) % 360;
        this.bearing.set(bearing);
      }
    };
    this.updateLateralDeviation = () => {
      this.lateralDeviation.set(this.getLateralDeviation());
    };
    const navComSubscriber = this.bus.getSubscriber();
    navComSubscriber.on(`nav_dme_${index}`).whenChanged().handle(this.navDme.set.bind(this.navDme));
    navComSubscriber.on(`nav_has_dme_${index}`).whenChanged().handle(this.setters.get("hasDme").setter);
    navComSubscriber.on(`nav_ident_${index}`).whenChanged().handle(this.setters.get("ident").setter);
    navComSubscriber.on(`nav_localizer_${index}`).whenChanged().handle(this.setters.get("hasLocalizer").setter);
    navComSubscriber.on(`nav_localizer_crs_${index}`).whenChanged().handle(this.navLocalizerCrsRad.set.bind(this.navLocalizerCrsRad));
    navComSubscriber.on(`nav_gs_error_${index}`).whenChanged().handle(this.glideSlopeErrorDegrees.set.bind(this.glideSlopeErrorDegrees));
    navComSubscriber.on(`nav_glideslope_${index}`).whenChanged().handle(this.setters.get("hasGlideSlope").setter);
    navComSubscriber.on(`nav_obs_${index}`).whenChanged().handle(this.setters.get("course").setter);
    navComSubscriber.on(`nav_radial_${index}`).whenChanged().handle(this.navRadial.set.bind(this.navRadial));
    navComSubscriber.on(`nav_cdi_${index}`).whenChanged().handle(this.navCdi.set.bind(this.navCdi));
    navComSubscriber.on(`nav_has_nav_${index}`).whenChanged().handle(this.setters.get("hasNav").setter);
    navComSubscriber.on(`nav_to_from_${index}`).whenChanged().handle(this.setters.get("toFrom").setter);
    const navComSimVarsSubscriber = this.bus.getSubscriber();
    navComSimVarsSubscriber.on(`nav_active_frequency_${index}`).whenChanged().handle(this.setters.get("activeFrequency").setter);
    this.hasDme.sub(this.updateDistance);
    this.navDme.sub(this.updateDistance);
    this.hasLocalizer.sub(this.updateIsLocalizer);
    this.activeFrequency.sub(this.updateIsLocalizer);
    this.hasLocalizer.sub(this.updateLocalizerCourse);
    this.navLocalizerCrsRad.sub(this.updateLocalizerCourse);
    this.localizerCourse.sub(this.trySlewObs);
    this.isLocalizer.sub(this.trySlewObs);
    this.hasGlideSlope.sub(this.updateVerticalDeviation);
    this.glideSlopeErrorDegrees.sub(this.updateVerticalDeviation);
    this.navRadial.sub(this.updateBearing);
    this.hasNav.sub(this.updateBearing);
    this.navCdi.sub(this.updateLateralDeviation);
    this.hasNav.sub(this.updateLateralDeviation);
  }
  /** @inheritdoc  * @license no license */
  getType() {
    return NavSourceType.Nav;
  }
  /**
   * Calculates the vertical deviation for the glide slope indicator.
   * @returns Deviation is in degrees, and standard glideslope is 1.4 degrees thick,
   * so the vdev indicator will max out when 0.7 degrees off the GS.
   *  * @license no license */
  getVerticalDeviation() {
    if (!this.hasGlideSlope.get()) {
      return null;
    } else {
      return this.glideSlopeErrorDegrees.get() / 0.7;
    }
  }
  /**
   * Calculates the lateral deviation for the CDI indicator.
   * @returns Deviation is in degrees, and standard glideslope is 1.4 degrees thick,
   * so the vdev indicator will max out when 0.7 degrees off the GS
   *  * @license no license */
  getLateralDeviation() {
    if (!this.hasNav.get()) {
      return null;
    } else {
      return this.navCdi.get() / 127;
    }
  }
}

/**
 * Navigation source handler for the H-60 helicopter's course needle display.
 * 
 * Extends the base NavIndicator class to manage source selection between:
 * - NAV1/NAV2 (VOR/ILS) 
 * - TACAN1/TACAN2 (Tactical Air Navigation)
 * - OFF state
 * 
 * The source label automatically updates to:
 * - "VOR1"/"VOR2" for NAV in VOR mode
 * - "ILS" for NAV in localizer mode  
 * - "TACAN1"/"TACAN2" for TACAN
 * - "OFF" when disabled
 * 
 * @example
 * // Create event bus
 * const bus = new EventBus();
 * 
 * // Configure nav sources
 * const courseNeedleNavSources = new NavSources(
 *   new NavRadioNavSource(bus, 'NAV1', 1),
 *   new NavRadioNavSource(bus, 'NAV2', 2), 
 *   new TacanNavSource(bus, 'TACAN1', 1),
 *   new TacanNavSource(bus, 'TACAN2', 2)
 * );
 * 
 * // Create nav indicators
 * const navIndicators = new NavIndicators(
 *   new Map([
 *     ['courseNeedle', new H60CourseNeedleNavIndicator(courseNeedleNavSources, bus)],
 *     ['bearingPointer1', new H60BearingPointer1NavIndicator(bearingPointer1NavSources, bus)],
 *     ['bearingPointer2', new H60BearingPointer2NavIndicator(bearingPointer2NavSources, bus)]
 *   ])
 * );
 * 
 * // Initialize
 * const backplane = new InstrumentBackplane();
 * backplane.addInstrument('navIndicators', navIndicators);
 * initH60NavIndicatorContext(navIndicators);
 * 
 * // Get needle indicator
 * const needleIndicator = navIndicators.get('courseNeedle');
 * needleIndicator.setNewSource('TACAN1');
 * 
 * // Subscribe to source changes
 * needleIndicator.source.sub((source) => {
 *   console.log(`Course needle source changed to: ${source?.name}`);
 * });
 * needleIndicator.bearing.sub((bearing) => {
 *   console.log(`Course needle bearing changed to: ${bearing}`);
 * });
  * @license no license */
class H60CourseNeedleNavIndicator extends NavIndicator {
  /** NavIndicator constructor.
   * @param navSources The possible nav sources that could be pointed to.
   * @param bus The bus.
    * @license no license */
  constructor(navSources, bus) {
    super(navSources, "NAV1");
    this.bus = bus;
    this.sourceLabel = Subject.create("");
    /** Sets a new navigation source
     * @param newSourceName The name of the new source to set or 'OFF' to disable
      * @license no license */
    this.setNewSource = (newSourceName) => {
      if (newSourceName === "OFF") {
        this.setSource(null);
        return;
      }
      const currentSource = this.source.get();
      if (currentSource && currentSource.name === newSourceName) {
        return;
      }
      this.setSource(newSourceName);
    };
    this.updateSourceLabel = () => {
      const source = this.source.get();
      if (!source) {
        this.sourceLabel.set("OFF");
        return;
      }
      if (source.name.startsWith("NAV")) {
        this.sourceLabel.set(source.isLocalizer.get() ? "ILS" : `VOR${source.index}`);
      } else if (source.name.startsWith("TACAN")) {
        this.sourceLabel.set(`TACAN${source.index}`);
      } else if (source.name === "GPS") {
        this.sourceLabel.set("MSN");
      }
    };
    this.source.sub(() => this.updateSourceLabel(), true);
  }
}
/**
 * H60BearingPointer1NavIndicator manages the white bearing pointer arrow navigation source.
 * 
 * Supports the following modes:
 * - VOR1: VHF Omnidirectional Range navigation
 * - TACAN1: Tactical Air Navigation
 * - ADF1: Automatic Direction Finder
 * - WPT: Waypoint bearing/distance from custom source
 * - OFF: Disabled state
  * @license no license */
class H60BearingPointer1NavIndicator extends NavIndicator {
  /** 
   * @param navSources The possible nav sources for the bearing pointer
   * @param bus The event bus
    * @license no license */
  constructor(navSources, bus) {
    super(navSources, "NAV1");
    this.bus = bus;
    this.sourceLabel = Subject.create("");
    /**
     * Sets a new navigation source for the bearing pointer
     * @param newSourceName The name of the new source or 'OFF' to disable
      * @license no license */
    this.setNewSource = (newSourceName) => {
      if (newSourceName === "OFF") {
        this.setSource(null);
        return;
      }
      const currentSource = this.source.get();
      if (currentSource && currentSource.name === newSourceName) {
        return;
      }
      this.setSource(newSourceName);
    };
    /**
     * Updates the source label based on the current navigation source
      * @license no license */
    this.updateSourceLabel = () => {
      const source = this.source.get();
      if (!source) {
        this.sourceLabel.set("OFF");
        return;
      }
      this.sourceLabel.set(source.name);
    };
    this.source.sub(() => this.updateSourceLabel(), true);
  }
}
class H60BearingPointer2NavIndicator extends NavIndicator {
  /** 
   * @param navSources The possible nav sources for the bearing pointer
   * @param bus The event bus
    * @license no license */
  constructor(navSources, bus) {
    super(navSources, "NAV2");
    this.bus = bus;
    this.sourceLabel = Subject.create("");
    /**
     * Sets a new navigation source for the bearing pointer
     * @param newSourceName The name of the new source or 'OFF' to disable
      * @license no license */
    this.setNewSource = (newSourceName) => {
      if (newSourceName === "OFF") {
        this.setSource(null);
        return;
      }
      const currentSource = this.source.get();
      if (currentSource && currentSource.name === newSourceName) {
        return;
      }
      this.setSource(newSourceName);
    };
    /**
     * Updates the source label based on the current navigation source
      * @license no license */
    this.updateSourceLabel = () => {
      const source = this.source.get();
      if (!source) {
        this.sourceLabel.set("OFF");
        return;
      }
      this.sourceLabel.set(source.name);
    };
    this.source.sub(() => this.updateSourceLabel(), true);
  }
}

/** 
 * Represents a TACAN radio, subscribes to TACAN SimVars and maps them to NavBase properties
  * @license no license */
class TacanNavSource extends NavSourceBase {
  /** @inheritdoc  * @license no license */
  constructor(bus, name, index) {
    super(bus, name, index);
    const simVarSubscriber = this.bus.getSubscriber();
    simVarSubscriber.on(`tacan_active_channel_${index}`).whenChanged().handle(this.activeFrequency.set.bind(this.activeFrequency));
    simVarSubscriber.on(`nav_has_tacan_${index}`).whenChanged().handle(this.hasNav.set.bind(this.hasNav));
    simVarSubscriber.on(`tacan_station_ident_${index}`).whenChanged().handle(this.ident.set.bind(this.ident));
    simVarSubscriber.on(`tacan_obs_${index}`).whenChanged().handle(this.course.set.bind(this.course));
    simVarSubscriber.on(`tacan_station_distance_${index}`).whenChanged().handle((distance) => {
      this.distance.set(this.hasNav.get() ? distance * 539957e-9 : null);
    });
    simVarSubscriber.on(`tacan_station_radial_${index}`).whenChanged().handle((radial) => {
      if (this.hasNav.get()) {
        this.bearing.set((radial + 180) % 360);
      }
    });
    simVarSubscriber.on(`tacan_station_cdi_${index}`).whenChanged().handle((cdi) => {
      this.lateralDeviation.set(this.hasNav.get() ? cdi / 127 : null);
    });
    simVarSubscriber.on(`nav_has_tacan_${index}`).whenChanged().handle((hasNav) => {
      this.toFrom.set(this.hasNav.get() ? hasNav : null);
    });
    this.hasNav.sub((hasNav) => {
      this.hasDme.set(hasNav);
    });
  }
  /** @inheritdoc  * @license no license */
  getType() {
    return NavSourceType.Tacan;
  }
}

/**
 * NavSource for waypoint navigation using MH60 local variables
 * Reads bearing, distance and active waypoint from local variables
  * @license no license */
class WPTNavSource extends NavSourceBase {
  /** @inheritdoc  * @license no license */
  constructor(bus, name) {
    super(bus, name, 0);
    const simVarSubscriber = this.bus.getSubscriber();
    simVarSubscriber.on("wpt_active").whenChanged().handle(this.hasNav.set.bind(this.hasNav));
    simVarSubscriber.on("wpt_bearing").whenChanged().handle((brg) => this.bearing.set(brg * Math.PI / 180));
    simVarSubscriber.on("wpt_distance").whenChanged().handle(this.distance.set.bind(this.distance));
  }
  /** @inheritdoc  * @license no license */
  getType() {
    return NavSourceType.Wpt;
  }
}

/** A publisher to poll and publish TACAN simvars.  * @license no license */
const _TacanSimVarPublisher = class _TacanSimVarPublisher extends SimVarPublisher {
  /**
   * Create a TacanSimVarPublisher
   * @param bus The EventBus to publish to
    * @license no license */
  constructor(bus) {
    super(_TacanSimVarPublisher.simvars, bus);
  }
  static test(publisher) {
    const tacanTestValues = {
      activeChannel1: 0,
      activeChannel2: 0,
      activeMode1: false,
      activeMode2: false,
      available1: false,
      available2: false,
      drivesNav11: false,
      drivesNav12: false,
      obs1: 0,
      obs2: 0,
      stationCdi1: 0,
      stationCdi2: 0,
      stationDistance1: 0,
      stationDistance2: 0,
      stationIdent1: "",
      stationIdent2: "",
      stationRadial1: 0,
      stationRadial2: 0,
      stationRadialError1: 0,
      stationRadialError2: 0,
      volume1: 0,
      volume2: 0
    };
    const subscriber = publisher.bus.getSubscriber();
    subscriber.on("tacan_active_channel_1").handle((v) => {
      tacanTestValues.activeChannel1 = v;
    });
    subscriber.on("tacan_active_channel_2").handle((v) => {
      tacanTestValues.activeChannel2 = v;
    });
    subscriber.on("tacan_active_mode_1").handle((v) => {
      tacanTestValues.activeMode1 = v;
    });
    subscriber.on("tacan_active_mode_2").handle((v) => {
      tacanTestValues.activeMode2 = v;
    });
    subscriber.on("tacan_available_1").handle((v) => {
      tacanTestValues.available1 = v;
    });
    subscriber.on("tacan_available_2").handle((v) => {
      tacanTestValues.available2 = v;
    });
    subscriber.on("tacan_drives_nav1_1").handle((v) => {
      tacanTestValues.drivesNav11 = v;
    });
    subscriber.on("tacan_drives_nav1_2").handle((v) => {
      tacanTestValues.drivesNav12 = v;
    });
    subscriber.on("tacan_obs_1").handle((v) => {
      tacanTestValues.obs1 = v;
    });
    subscriber.on("tacan_obs_2").handle((v) => {
      tacanTestValues.obs2 = v;
    });
    subscriber.on("tacan_station_cdi_1").handle((v) => {
      tacanTestValues.stationCdi1 = v;
    });
    subscriber.on("tacan_station_cdi_2").handle((v) => {
      tacanTestValues.stationCdi2 = v;
    });
    subscriber.on("tacan_station_distance_1").handle((v) => {
      tacanTestValues.stationDistance1 = v;
    });
    subscriber.on("tacan_station_distance_2").handle((v) => {
      tacanTestValues.stationDistance2 = v;
    });
    subscriber.on("tacan_station_ident_1").handle((v) => {
      tacanTestValues.stationIdent1 = v;
    });
    subscriber.on("tacan_station_ident_2").handle((v) => {
      tacanTestValues.stationIdent2 = v;
    });
    subscriber.on("tacan_station_radial_1").handle((v) => {
      tacanTestValues.stationRadial1 = v;
    });
    subscriber.on("tacan_station_radial_2").handle((v) => {
      tacanTestValues.stationRadial2 = v;
    });
    subscriber.on("tacan_station_radial_error_1").handle((v) => {
      tacanTestValues.stationRadialError1 = v;
    });
    subscriber.on("tacan_station_radial_error_2").handle((v) => {
      tacanTestValues.stationRadialError2 = v;
    });
    subscriber.on("tacan_volume_1").handle((v) => {
      tacanTestValues.volume1 = v;
    });
    subscriber.on("tacan_volume_2").handle((v) => {
      tacanTestValues.volume2 = v;
    });
    const interval = setInterval(() => {
      console.log("=== TACAN Values ===");
      console.table(tacanTestValues);
    }, 1e3);
    return () => {
      clearInterval(interval);
    };
  }
};
_TacanSimVarPublisher.simvars = /* @__PURE__ */ new Map([
  // i - All TACAN SimVars require an index (1 or 2)
  ["tacan_active_channel_1", { name: "TACAN ACTIVE CHANNEL:1" /* TacanActiveChannel1 */, type: SimVarValueType.Number }],
  ["tacan_active_channel_2", { name: "TACAN ACTIVE CHANNEL:2" /* TacanActiveChannel2 */, type: SimVarValueType.Number }],
  ["tacan_active_mode_1", { name: "TACAN ACTIVE MODE:1" /* TacanActiveMode1 */, type: SimVarValueType.Bool }],
  ["tacan_active_mode_2", { name: "TACAN ACTIVE MODE:2" /* TacanActiveMode2 */, type: SimVarValueType.Bool }],
  ["tacan_available_1", { name: "TACAN AVAILABLE:1" /* TacanAvailable1 */, type: SimVarValueType.Bool }],
  ["tacan_available_2", { name: "TACAN AVAILABLE:2" /* TacanAvailable2 */, type: SimVarValueType.Bool }],
  ["tacan_drives_nav1_1", { name: "TACAN DRIVES NAV1:1" /* TacanDrivesNav11 */, type: SimVarValueType.Bool }],
  ["tacan_drives_nav1_2", { name: "TACAN DRIVES NAV1:2" /* TacanDrivesNav12 */, type: SimVarValueType.Bool }],
  ["tacan_obs_1", { name: "TACAN OBS:1" /* TacanObs1 */, type: SimVarValueType.Degree }],
  ["tacan_obs_2", { name: "TACAN OBS:2" /* TacanObs2 */, type: SimVarValueType.Degree }],
  ["tacan_station_cdi_1", { name: "TACAN STATION CDI:1" /* TacanStationCdi1 */, type: SimVarValueType.Number }],
  ["tacan_station_cdi_2", { name: "TACAN STATION CDI:2" /* TacanStationCdi2 */, type: SimVarValueType.Number }],
  ["tacan_station_distance_1", { name: "TACAN STATION DISTANCE:1" /* TacanStationDistance1 */, type: SimVarValueType.Meters }],
  ["tacan_station_distance_2", { name: "TACAN STATION DISTANCE:2" /* TacanStationDistance2 */, type: SimVarValueType.Meters }],
  ["tacan_station_ident_1", { name: "TACAN STATION IDENT:1" /* TacanStationIdent1 */, type: SimVarValueType.String }],
  ["tacan_station_ident_2", { name: "TACAN STATION IDENT:2" /* TacanStationIdent2 */, type: SimVarValueType.String }],
  ["tacan_station_radial_1", { name: "TACAN STATION RADIAL:1" /* TacanStationRadial1 */, type: SimVarValueType.Degree }],
  ["tacan_station_radial_2", { name: "TACAN STATION RADIAL:2" /* TacanStationRadial2 */, type: SimVarValueType.Degree }],
  ["tacan_station_radial_error_1", { name: "TACAN STATION RADIAL ERROR:1" /* TacanStationRadialError1 */, type: SimVarValueType.Degree }],
  ["tacan_station_radial_error_2", { name: "TACAN STATION RADIAL ERROR:2" /* TacanStationRadialError2 */, type: SimVarValueType.Degree }],
  ["nav_has_tacan_1", { name: "NAV HAS TACAN:1" /* NavHasTacan1 */, type: SimVarValueType.Enum }],
  ["nav_has_tacan_2", { name: "NAV HAS TACAN:2" /* NavHasTacan2 */, type: SimVarValueType.Enum }],
  ["tacan_volume_1", { name: "TACAN VOLUME:1" /* TacanVolume1 */, type: SimVarValueType.Percent }],
  ["tacan_volume_2", { name: "TACAN VOLUME:2" /* TacanVolume2 */, type: SimVarValueType.Percent }]
]);
let TacanSimVarPublisher = _TacanSimVarPublisher;

/** Publisher to poll and publish waypoint simvars  * @license no license */
const _WPTPublisher = class _WPTPublisher extends SimVarPublisher {
  /**
   * Create a WPTPublisher
   * @param bus The EventBus to publish to
    * @license no license */
  constructor(bus) {
    super(_WPTPublisher.simvars, bus);
  }
};
_WPTPublisher.simvars = /* @__PURE__ */ new Map([
  ["wpt_active", { name: "L:MH60_ActiveWpt" /* WptActive */, type: SimVarValueType.Number }],
  ["wpt_bearing", { name: "L:MH60_Bearing" /* WptBearing */, type: SimVarValueType.Degree }],
  ["wpt_distance", { name: "L:MH60_Distance" /* WptDistance */, type: SimVarValueType.Meters }]
]);
let WPTPublisher = _WPTPublisher;

/**
 * A publisher for LNAV sim var events.
  * @license no license */
const _LNavSimVarPublisher = class _LNavSimVarPublisher extends SimVarPublisher {
  /**
   * Constructor.
   * @param bus The event bus to which to publish.
    * @license no license */
  constructor(bus) {
    super(_LNavSimVarPublisher.simvars, bus);
  }
  /**
   * Test function to monitor all LNAV values
   * @param publisher The LNavSimVarPublisher instance to test
   * @returns Cleanup function to stop monitoring
    * @license no license */
  static test(bus, interval = 1) {
    const lnavTestValues = {};
    _LNavSimVarPublisher.simvars.forEach((_, key) => {
      lnavTestValues[key] = 0;
    });
    const sub = bus.getSubscriber();
    console.log(sub);
    _LNavSimVarPublisher.simvars.forEach((_, key) => {
      sub.on(key).handle((v) => {
        lnavTestValues[key] = v;
      });
    });
    const begin = setInterval(() => {
      console.log("=== LNAV Values ===");
      console.table(lnavTestValues);
    }, 1e3 * interval);
    return () => {
      clearInterval(begin);
    };
  }
};
_LNavSimVarPublisher.simvars = /* @__PURE__ */ new Map([
  ["lnav_dtk", { name: "L:WTAP_LNav_DTK" /* DTK */, type: SimVarValueType.Degree }],
  ["lnav_xtk", { name: "L:WTAP_LNav_XTK" /* XTK */, type: SimVarValueType.NM }],
  ["lnav_is_tracking", { name: "L:WTAP_LNav_Is_Tracking" /* IsTracking */, type: SimVarValueType.Bool }],
  ["lnav_tracked_leg_index", { name: "L:WTAP_LNav_Tracked_Leg_Index" /* TrackedLegIndex */, type: SimVarValueType.Number }],
  ["lnav_transition_mode", { name: "L:WTAP_LNav_Transition_Mode" /* TransitionMode */, type: SimVarValueType.Number }],
  ["lnav_tracked_vector_index", { name: "L:WTAP_LNav_Tracked_Vector_Index" /* TrackedVectorIndex */, type: SimVarValueType.Number }],
  ["lnav_course_to_steer", { name: "L:WTAP_LNav_Course_To_Steer" /* CourseToSteer */, type: SimVarValueType.Degree }],
  ["lnav_is_suspended", { name: "L:WTAP_LNav_Is_Suspended" /* IsSuspended */, type: SimVarValueType.Bool }],
  ["lnav_leg_distance_along", { name: "L:WTAP_LNav_Leg_Distance_Along" /* LegDistanceAlong */, type: SimVarValueType.NM }],
  ["lnav_leg_distance_remaining", { name: "L:WTAP_LNav_Leg_Distance_Remaining" /* LegDistanceRemaining */, type: SimVarValueType.NM }],
  ["lnav_vector_distance_along", { name: "L:WTAP_LNav_Vector_Distance_Along" /* VectorDistanceAlong */, type: SimVarValueType.NM }],
  ["lnav_vector_distance_remaining", { name: "L:WTAP_LNav_Vector_Distance_Remaining" /* VectorDistanceRemaining */, type: SimVarValueType.NM }],
  ["lnav_vector_anticipation_distance", { name: "L:WTAP_LNav_Vector_Anticipation_Distance" /* VectorAnticipationDistance */, type: SimVarValueType.NM }],
  ["lnav_along_track_speed", { name: "L:WTAP_LNav_Along_Track_Speed" /* AlongTrackSpeed */, type: SimVarValueType.Knots }]
]);
let LNavSimVarPublisher = _LNavSimVarPublisher;


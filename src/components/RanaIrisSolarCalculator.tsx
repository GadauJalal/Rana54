import { useState } from "react";
import { Calculator, Zap, TrendingUp, Leaf, ArrowRight, MapPin, Home, Building2, Battery, Sun, FileText, Download, Lock, CheckCircle2, Info, DollarSign, BarChart3, Shield, Upload, Users, Award, Sparkles, Play, HelpCircle, Settings, Share2, Mail, CloudRain, Cloud, CloudDrizzle, Grid3x3, Sliders, Save, Eye, Percent, Calendar, PiggyBank, TreePine, Car, Factory, Lightbulb, Globe, Target, Wrench, Gauge, Layers, Box, LayoutGrid, ExternalLink, CreditCard, Move, RotateCw, Plus, Minus, ChevronDown, ChevronUp, X, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";

type PageView = "hero" | "subscription" | 
  "flow-estimate" | "results-estimate" |
  "flow-roof" | "results-roof" |
  "flow-compare" | "results-compare";

type EstimateStep = "site" | "usage" | "preferences";
type RoofStep = "roof-area" | "panel-placement" | "options";
type CompareStep = "select-scenarios" | "configure-scenarios";

type BuildingType = "home" | "sme" | "community";
type FinanceType = "buy" | "lease" | "payg";
type SystemType = "new" | "upgrade" | "battery-only";
type ShadingLevel = "none" | "light" | "medium" | "heavy";

interface EstimateState {
  // Site
  address: string;
  buildingType: BuildingType;
  country: string;
  
  // Usage
  monthlyKwh: number;
  monthlyBill: number;
  tariff: number;
  exportRate: number;
  
  // Preferences
  coveragePercent: number;
  includeBattery: boolean;
  financeType: FinanceType;
  
  // Advanced
  panelWattage: number;
  inverterKw: number;
  performanceRatio: number;
  co2Factor: number;
  
  // Meta
  isPro: boolean;
}

interface RoofState {
  // Roof area
  address: string;
  buildingType: BuildingType;
  roofPlanes: number;
  tilt: number;
  azimuth: number;
  shadingLevel: ShadingLevel;
  roofAreaSqm: number;
  
  // Panel placement
  panelCount: number;
  roofCoverage: number;
  systemSizeKwp: number;
  
  // Options
  includeBattery: boolean;
  batteryCapacity: number;
  autonomyDays: number;
  financeType: FinanceType;
  
  // Advanced
  panelWattage: number;
  performanceRatio: number;
  co2Factor: number;
  
  // Meta
  isPro: boolean;
}

interface ScenarioConfig {
  type: SystemType;
  size: number;
  battery: boolean;
  batteryCapacity: number;
  finance: FinanceType;
  existingKwp: number;
}

interface CompareState {
  selectedScenarios: SystemType[];
  scenarios: {
    [key in SystemType]?: ScenarioConfig;
  };
  isPro: boolean;
}

interface SimulationResults {
  systemSizeKwp: number;
  panelCount: number;
  systemType: "grid-tied" | "hybrid" | "off-grid";
  annualGenerationKwh: number;
  annualSavings: number;
  simplePayback: number;
  co2AvoidedTons: number;
  suitabilityIndex: number;
  peakSunHours: number;
  mountingType: string;
  monthlyGeneration: number[];
  performanceRatio: number;
  losses: { shading: number; soiling: number; temperature: number; inverter: number };
  batteryAutonomyHours: number;
  roi: number;
  npv: number;
  irr: number;
  lcoe: number;
  impactEquivalents: { trees: number; cars: number };
  componentDetails: {
    solarStack: string;
    inverterType: string;
    batteryType: string;
  };
  // For roof flow
  layoutSummary?: {
    panelRows: number;
    tilt: number;
    orientation: string;
    roofCoverage: number;
  };
}

interface ComparisonResult {
  scenario: SystemType;
  capex: number;
  opex: number;
  savings: number;
  payback: number;
  roi: number;
  irr: number;
  lcoe: number;
  co2Avoided: number;
}

export function RanaIrisSolarCalculator() {
  const [currentView, setCurrentView] = useState<PageView>("hero");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const [returnView, setReturnView] = useState<PageView>("hero");

  // Estimate flow state
  const [estimateStep, setEstimateStep] = useState<EstimateStep>("site");
  const [estimateState, setEstimateState] = useState<EstimateState>({
    address: "",
    buildingType: "home",
    country: "Kenya",
    monthlyKwh: 500,
    monthlyBill: 75,
    tariff: 0.15,
    exportRate: 0.08,
    coveragePercent: 70,
    includeBattery: false,
    financeType: "buy",
    panelWattage: 450,
    inverterKw: 5,
    performanceRatio: 0.80,
    co2Factor: 0.6,
    isPro: false
  });
  const [estimateResults, setEstimateResults] = useState<SimulationResults | null>(null);
  const [showEstimateAdvanced, setShowEstimateAdvanced] = useState(false);

  // Roof flow state
  const [roofStep, setRoofStep] = useState<RoofStep>("roof-area");
  const [roofState, setRoofState] = useState<RoofState>({
    address: "",
    buildingType: "home",
    roofPlanes: 1,
    tilt: 15,
    azimuth: 180,
    shadingLevel: "light",
    roofAreaSqm: 50,
    panelCount: 0,
    roofCoverage: 0,
    systemSizeKwp: 0,
    includeBattery: false,
    batteryCapacity: 10,
    autonomyDays: 2,
    financeType: "buy",
    panelWattage: 450,
    performanceRatio: 0.80,
    co2Factor: 0.6,
    isPro: false
  });
  const [roofResults, setRoofResults] = useState<SimulationResults | null>(null);
  const [showRoofAdvanced, setShowRoofAdvanced] = useState(false);

  // Compare flow state
  const [compareStep, setCompareStep] = useState<CompareStep>("select-scenarios");
  const [compareState, setCompareState] = useState<CompareState>({
    selectedScenarios: [],
    scenarios: {},
    isPro: false
  });
  const [compareResults, setCompareResults] = useState<ComparisonResult[] | null>(null);

  // UI state
  const [showMapModal, setShowMapModal] = useState(false);

  // Pricing
  const monthlyPrice = 49;
  const annualPrice = 490;
  const displayPrice = billingCycle === "monthly" ? monthlyPrice : annualPrice;
  const pricePerMonth = billingCycle === "monthly" ? monthlyPrice : Math.round(annualPrice / 12);

  // ==================== SIMULATION LOGIC ====================
  
  const runEstimateSimulation = () => {
    const targetKwh = estimateState.monthlyKwh * 12 * (estimateState.coveragePercent / 100);
    const systemSizeKwp = targetKwh / (1500 * estimateState.performanceRatio);
    const annualGeneration = systemSizeKwp * 1500 * estimateState.performanceRatio;
    const selfConsumption = estimateState.includeBattery ? annualGeneration * 0.85 : annualGeneration * 0.65;
    const exported = annualGeneration - selfConsumption;
    const annualSavings = (selfConsumption * estimateState.tariff) + (exported * estimateState.exportRate);
    const systemCost = systemSizeKwp * 1000 + (estimateState.includeBattery ? 10 * 500 : 0);
    const simplePayback = systemCost / annualSavings;
    const co2AvoidedTons = (annualGeneration * estimateState.co2Factor) / 1000;

    const monthlyGeneration = [
      0.75, 0.82, 0.95, 1.05, 1.1, 1.15,
      1.08, 1.02, 0.98, 0.88, 0.78, 0.72
    ].map(factor => (annualGeneration / 12) * factor);

    let systemType: "grid-tied" | "hybrid" | "off-grid" = "grid-tied";
    if (estimateState.includeBattery) systemType = "hybrid";

    setEstimateResults({
      systemSizeKwp: parseFloat(systemSizeKwp.toFixed(2)),
      panelCount: Math.ceil((systemSizeKwp * 1000) / estimateState.panelWattage),
      systemType,
      annualGenerationKwh: Math.round(annualGeneration),
      annualSavings: Math.round(annualSavings),
      simplePayback: parseFloat(simplePayback.toFixed(1)),
      co2AvoidedTons: parseFloat(co2AvoidedTons.toFixed(2)),
      suitabilityIndex: 85,
      peakSunHours: 5.2,
      mountingType: "Roof mount",
      monthlyGeneration,
      performanceRatio: estimateState.performanceRatio * 100,
      losses: { shading: 3, soiling: 4, temperature: 8, inverter: 5 },
      batteryAutonomyHours: estimateState.includeBattery ? 48 : 0,
      roi: 15.2,
      npv: 12450,
      irr: 18.3,
      lcoe: 0.08,
      impactEquivalents: { 
        trees: Math.round(co2AvoidedTons * 47), 
        cars: parseFloat((co2AvoidedTons / 4.6).toFixed(1))
      },
      componentDetails: {
        solarStack: `${Math.ceil((systemSizeKwp * 1000) / estimateState.panelWattage)}× ${estimateState.panelWattage}W monocrystalline panels`,
        inverterType: `${estimateState.inverterKw}kW ${systemType === "hybrid" ? "hybrid" : "string"} inverter`,
        batteryType: estimateState.includeBattery ? "10kWh lithium-ion battery" : "No battery"
      }
    });

    setCurrentView("results-estimate");
  };

  const runRoofSimulation = () => {
    // Calculate optimal panel count based on roof area
    const usableRoofArea = roofState.roofAreaSqm * 0.75; // 75% usable
    const calculatedPanelCount = Math.floor(usableRoofArea / 2); // ~2sqm per panel
    const systemSizeKwp = (calculatedPanelCount * roofState.panelWattage) / 1000;
    
    const annualGeneration = systemSizeKwp * 1500 * roofState.performanceRatio;
    const selfConsumption = roofState.includeBattery ? annualGeneration * 0.85 : annualGeneration * 0.65;
    const exported = annualGeneration - selfConsumption;
    const annualSavings = (selfConsumption * 0.15) + (exported * 0.08);
    const systemCost = systemSizeKwp * 1000 + (roofState.includeBattery ? roofState.batteryCapacity * 500 : 0);
    const simplePayback = systemCost / annualSavings;
    const co2AvoidedTons = (annualGeneration * roofState.co2Factor) / 1000;

    const monthlyGeneration = [
      0.75, 0.82, 0.95, 1.05, 1.1, 1.15,
      1.08, 1.02, 0.98, 0.88, 0.78, 0.72
    ].map(factor => (annualGeneration / 12) * factor);

    let systemType: "grid-tied" | "hybrid" | "off-grid" = "grid-tied";
    if (roofState.includeBattery && roofState.batteryCapacity >= 10) systemType = "hybrid";
    if (roofState.autonomyDays >= 3) systemType = "off-grid";
    
    const calculatedRoofCoverage = (calculatedPanelCount * 2) / roofState.roofAreaSqm * 100;

    setRoofResults({
      systemSizeKwp: parseFloat(systemSizeKwp.toFixed(2)),
      panelCount: calculatedPanelCount,
      systemType,
      annualGenerationKwh: Math.round(annualGeneration),
      annualSavings: Math.round(annualSavings),
      simplePayback: parseFloat(simplePayback.toFixed(1)),
      co2AvoidedTons: parseFloat(co2AvoidedTons.toFixed(2)),
      suitabilityIndex: roofState.shadingLevel === "none" ? 95 : roofState.shadingLevel === "light" ? 85 : 70,
      peakSunHours: 5.2,
      mountingType: roofState.tilt > 20 ? "Tilted roof mount" : "Flat roof ballasted",
      monthlyGeneration,
      performanceRatio: roofState.performanceRatio * 100,
      losses: { shading: roofState.shadingLevel === "heavy" ? 15 : roofState.shadingLevel === "medium" ? 8 : roofState.shadingLevel === "light" ? 3 : 0, soiling: 4, temperature: 8, inverter: 5 },
      batteryAutonomyHours: roofState.includeBattery ? roofState.autonomyDays * 24 : 0,
      roi: 15.2,
      npv: 12450,
      irr: 18.3,
      lcoe: 0.08,
      impactEquivalents: { 
        trees: Math.round(co2AvoidedTons * 47), 
        cars: parseFloat((co2AvoidedTons / 4.6).toFixed(1))
      },
      componentDetails: {
        solarStack: `${calculatedPanelCount}× ${roofState.panelWattage}W monocrystalline panels`,
        inverterType: `${Math.ceil(systemSizeKwp)}kW ${systemType === "hybrid" ? "hybrid" : "string"} inverter`,
        batteryType: roofState.includeBattery ? `${roofState.batteryCapacity}kWh lithium-ion battery` : "No battery"
      },
      layoutSummary: {
        panelRows: Math.ceil(calculatedPanelCount / 10),
        tilt: roofState.tilt,
        orientation: roofState.azimuth === 180 ? "South" : roofState.azimuth === 0 ? "North" : roofState.azimuth === 90 ? "East" : "West",
        roofCoverage: calculatedRoofCoverage
      }
    });

    setCurrentView("results-roof");
  };

  const runCompareSimulation = () => {
    const results: ComparisonResult[] = compareState.selectedScenarios.map(scenarioType => {
      const scenario = compareState.scenarios[scenarioType]!;
      const systemSizeKwp = scenarioType === "battery-only" ? 0 : scenario.size;
      const annualGeneration = systemSizeKwp * 1500 * 0.80;
      const selfConsumption = scenario.battery ? annualGeneration * 0.85 : annualGeneration * 0.65;
      const exported = annualGeneration - selfConsumption;
      const annualSavings = (selfConsumption * 0.15) + (exported * 0.08);
      
      let capex = systemSizeKwp * 1000;
      if (scenario.battery) capex += scenario.batteryCapacity * 500;
      if (scenarioType === "upgrade") capex *= 0.7; // Lower cost for upgrade
      if (scenarioType === "battery-only") capex = scenario.batteryCapacity * 500;

      const opex = systemSizeKwp * 20; // Annual O&M
      const payback = annualSavings > 0 ? capex / annualSavings : 999;
      const roi = (annualSavings / capex) * 100;
      const co2Avoided = (annualGeneration * 0.6) / 1000;

      return {
        scenario: scenarioType,
        capex: Math.round(capex),
        opex: Math.round(opex),
        savings: Math.round(annualSavings),
        payback: parseFloat(payback.toFixed(1)),
        roi: parseFloat(roi.toFixed(1)),
        irr: 18.3,
        lcoe: 0.08,
        co2Avoided: parseFloat(co2Avoided.toFixed(2))
      };
    });

    setCompareResults(results);
    setCurrentView("results-compare");
  };

  // ==================== HERO VIEW ====================
  if (currentView === "hero") {
    return (
      <div className="min-h-screen bg-white transition-all duration-500 ease-in-out">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-20">
            
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-3xl bg-[#F57B44] p-8 sm:p-16 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.35)]">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                  <Calculator className="w-4 h-4 text-white" />
                  <span className="text-white tracking-wide">RANA-IRIS — SIMULATOR & INTELLIGENCE (SOLUTIONS)</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
                  Size, save, and verify your solar — for homes, SMEs, and programs
                </h1>
                
                <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                  Research-driven African solar intelligence with MRV integration
                </p>
              </div>
            </section>

            {/* Calculator Modes - 3 Equal Cards */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl mb-4 tracking-tight">
                  Choose Your Path
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Three ways to explore your solar potential
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    mode: "flow-estimate" as PageView,
                    icon: DollarSign,
                    title: "Estimate my savings",
                    description: "Usage-first wizard for residential and SME solar sizing",
                    features: ["Quick 3-step wizard", "Annual savings estimate", "Simple payback period"],
                    color: "#F57B44"
                  },
                  {
                    mode: "flow-roof" as PageView,
                    icon: Grid3x3,
                    title: "Map my roof",
                    description: "Visual roof layout tool with panel placement optimizer",
                    features: ["Interactive roof mapping", "Panel placement", "Shading analysis"],
                    color: "#527E5F"
                  },
                  {
                    mode: "flow-compare" as PageView,
                    icon: Sliders,
                    title: "Compare my options",
                    description: "Compare new vs upgrade, battery options, and financing scenarios",
                    features: ["Side-by-side comparison", "Battery scenarios", "Finance models"],
                    color: "#F6B842"
                  }
                ].map((option) => {
                  const Icon = option.icon;
                  return (
                    <Card
                      key={option.mode}
                      onClick={() => {
                        setCurrentView(option.mode);
                        // Reset wizard step for each flow
                        if (option.mode === "flow-estimate") setEstimateStep("site");
                        if (option.mode === "flow-roof") setRoofStep("roof-area");
                        if (option.mode === "flow-compare") setCompareStep("select-scenarios");
                      }}
                      className="group relative p-8 cursor-pointer border-2 border-gray-200 hover:border-[#527E5F]/30 hover:shadow-[0_20px_70px_-15px_rgba(82,126,95,0.3)] transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: option.color }}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                      <h3 className="text-[#527E5F] mb-3 tracking-wide">{option.title}</h3>
                      <p className="text-gray-600 mb-6">{option.description}</p>
                      
                      <ul className="space-y-2 mb-6">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-[#527E5F] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center text-[#F57B44] group-hover:translate-x-2 transition-transform">
                        <span className="mr-2">Get Started</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Card>
                  );
                })}
              </div>
              
              {/* Disclaimer */}
              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900">
                    <strong>Disclaimer:</strong> The system sizes and financial insights provided by Rana Iris are estimates only. All results are indicative, and the tool should be used at the user's own discretion.
                  </p>
                </div>
              </div>
            </section>

            {/* Methodology & Credibility */}
            <section className="relative overflow-hidden rounded-3xl bg-gray-50 p-8 sm:p-12 border border-gray-200">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#527E5F] flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl tracking-tight">Research-Driven African Solar Intelligence</h2>
                </div>
                <p className="text-xl text-gray-600 max-w-4xl">
                  Built with verified African solar resource data, integrated with RanaMeter & RanaID for full MRV loop
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-white border border-gray-200">
                  <div className="w-12 h-12 rounded-xl bg-[#F57B44] flex items-center justify-center mb-4">
                    <Gauge className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[#527E5F] mb-2">Pre-Install Estimates</h3>
                  <p className="text-gray-600">Simulator provides planning estimates using regional irradiance data and verified performance models</p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-gray-200">
                  <div className="w-12 h-12 rounded-xl bg-[#527E5F] flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[#527E5F] mb-2">Post-Install Verification</h3>
                  <p className="text-gray-600">RanaMeter binds device identity, RanaOS ingests signed readings for verified impact</p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-gray-200">
                  <div className="w-12 h-12 rounded-xl bg-[#F6B842] flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[#527E5F] mb-2">Continuous Learning</h3>
                  <p className="text-gray-600">Estimate vs Real dashboard shows learning deltas to improve model accuracy</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl bg-blue-50 border border-blue-200">
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-blue-900">
                    <strong>Data sources:</strong> Regional GHI datasets, country-specific emission factors (v2.3.1, updated Nov 2024), component performance libraries. Results align with Rana54's MRV system.
                  </p>
                </div>
              </div>

              {/* Why Rana Iris Delivers Insights You Can Trust */}
              <div className="mt-8 mb-8">
                <h3 className="text-2xl mb-6 text-[#527E5F] tracking-tight">Why Rana Iris Delivers Insights You Can Trust</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-[#527E5F] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[#527E5F] text-sm mb-1">African-Specific Data</h4>
                      <p className="text-sm text-gray-600">Calibrated with real solar resource measurements from African regions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-[#527E5F] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[#527E5F] text-sm mb-1">MRV Integration</h4>
                      <p className="text-sm text-gray-600">Verified by RanaMeter's measurement, reporting & verification system</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-[#527E5F] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[#527E5F] text-sm mb-1">Continuous Model Improvement</h4>
                      <p className="text-sm text-gray-600">Learning loop compares estimates with actual performance data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-[#527E5F] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[#527E5F] text-sm mb-1">Transparent Methodology</h4>
                      <p className="text-sm text-gray-600">Open documentation of calculation methods and data sources</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Using Rana Iris – Help & Support */}
              <div className="mt-8">
                <h3 className="text-2xl mb-6 text-[#527E5F] tracking-tight">Using Rana Iris – Help & Support</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:border-[#527E5F]/30 transition-all duration-300">
                    <Play className="w-5 h-5 text-[#F57B44] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[#527E5F] text-sm mb-1">Video Tutorials</h4>
                      <p className="text-sm text-gray-600">Step-by-step guides for all features</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:border-[#527E5F]/30 transition-all duration-300">
                    <FileText className="w-5 h-5 text-[#527E5F] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[#527E5F] text-sm mb-1">Documentation</h4>
                      <p className="text-sm text-gray-600">Complete methodology & user guides</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:border-[#527E5F]/30 transition-all duration-300">
                    <Mail className="w-5 h-5 text-[#F6B842] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[#527E5F] text-sm mb-1">Support Team</h4>
                      <p className="text-sm text-gray-600">Get help from our experts</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feedback Section */}
              <div className="mt-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-xl bg-gradient-to-r from-[#527E5F]/10 to-[#F6B842]/10 border border-[#527E5F]/20">
                  <div className="flex items-start gap-4 flex-1">
                    <MessageSquare className="w-6 h-6 text-[#F57B44] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-[#527E5F] mb-2">We're continually enhancing the Rana Iris experience</h4>
                      <p className="text-sm text-gray-600">Your feedback helps us improve. Please share your thoughts.</p>
                    </div>
                  </div>
                  <Button className="bg-[#527E5F] hover:bg-[#527E5F]/90 text-white rounded-xl px-6 shrink-0">
                    Share Feedback
                    <MessageSquare className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </section>

            {/* Upgrade Ribbon */}
            <section className="relative overflow-hidden rounded-3xl bg-[#F57B44] p-8 sm:p-12 text-white shadow-[0_20px_70px_-15px_rgba(245,123,68,0.4)]">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <Badge className="mb-4 bg-white/20 text-white border-white/30">
                    PRO FEATURES
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl mb-4 tracking-tight">
                    Unlock Advanced Solar Intelligence
                  </h2>
                  <p className="text-white/90 mb-6 text-lg">
                    Monthly charts, loss breakdown, finance models (ROI/IRR/LCOE), battery autonomy sim, portfolio management, proposal PDFs, CSV/API exports
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {[
                      "Monthly generation charts",
                      "Performance ratio & losses",
                      "Battery autonomy analysis",
                      "Financial models (ROI/NPV/IRR/LCOE)",
                      "Portfolio & project save",
                      "PDF proposals & CSV export"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-1" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Button 
                    size="lg"
                    onClick={() => {
                      setReturnView("hero");
                      setCurrentView("subscription");
                    }}
                    className="bg-white text-[#F57B44] hover:bg-white/90 rounded-xl px-10"
                  >
                    Upgrade to Pro
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>
    );
  }

  // ==================== SUBSCRIPTION VIEW ====================
  if (currentView === "subscription") {
    const features = [
      {
        category: "Advanced Analytics",
        icon: BarChart3,
        items: [
          "Monthly generation charts with seasonal breakdowns",
          "Performance ratio & detailed loss analysis",
          "Battery autonomy simulations & storage optimization",
          "Advanced financial models (ROI, NPV, IRR, LCOE)",
          "Real-time sensitivity analysis",
          "Custom degradation modeling"
        ]
      },
      {
        category: "Export & Management",
        icon: Download,
        items: [
          "Professional PDF proposal downloads",
          "Portfolio management & project saves",
          "CSV & API data exports",
          "Impact equivalents (trees planted, cars off road)",
          "Multi-project comparison tools",
          "White-label reporting options"
        ]
      },
      {
        category: "Advanced Inputs",
        icon: Sliders,
        items: [
          "Roof area & orientation customization",
          "Component-level equipment selection",
          "Shading analysis & performance tuning",
          "CO₂ factor override for regions",
          "Custom tariff structures",
          "Weather pattern adjustments"
        ]
      },
      {
        category: "Priority Support",
        icon: Award,
        items: [
          "Email support with priority response",
          "Direct access to methodology team",
          "Early access to new features",
          "Dedicated account manager (Enterprise)",
          "Training & onboarding sessions",
          "API integration support"
        ]
      }
    ];

    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#527E5F] text-white">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F6B842]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#527E5F]/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#F57B44]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <Button
              variant="ghost"
              onClick={() => setCurrentView(returnView)}
              className="mb-8 text-white hover:bg-white/10"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back
            </Button>

            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                RANA-IRIS PRO
              </Badge>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight">
                Unlock Advanced Solar Intelligence
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
                Professional-grade simulations, financial models, and analytics to power your solar decisions
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-8 py-3 rounded-xl transition-all text-lg ${
                    billingCycle === "monthly"
                      ? "bg-white text-[#527E5F] shadow-lg scale-105"
                      : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("annual")}
                  className={`px-8 py-3 rounded-xl transition-all text-lg relative ${
                    billingCycle === "annual"
                      ? "bg-white text-[#527E5F] shadow-lg scale-105"
                      : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                  }`}
                >
                  Annual
                  <Badge className="absolute -top-2 -right-2 bg-[#F6B842] text-[#527E5F] text-xs border-0">
                    Save 17%
                  </Badge>
                </button>
              </div>

              {/* Price Display */}
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-12 border-2 border-white shadow-[0_30px_90px_-15px_rgba(0,0,0,0.4)] max-w-2xl mx-auto">
                <div className="flex items-baseline justify-center gap-3 mb-4">
                  <span className="text-7xl sm:text-8xl text-[#527E5F]">${displayPrice}</span>
                  <div className="text-left">
                    <div className="text-2xl text-[#527E5F]">
                      /{billingCycle === "monthly" ? "month" : "year"}
                    </div>
                    {billingCycle === "annual" && (
                      <div className="text-sm text-gray-600">
                        Just ${pricePerMonth}/month
                      </div>
                    )}
                  </div>
                </div>
                
                <Button
                  onClick={() => {
                    // Set Pro mode for all flows
                    setEstimateState({ ...estimateState, isPro: true });
                    setRoofState({ ...roofState, isPro: true });
                    setCompareState({ ...compareState, isPro: true });
                    setCurrentView(returnView);
                  }}
                  size="lg"
                  className="w-full bg-[#527E5F] text-white hover:opacity-90 rounded-xl py-6 text-xl shadow-lg"
                >
                  <Sparkles className="w-6 h-6 mr-2" />
                  Start Pro Subscription
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-8 mt-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#527E5F]" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#527E5F]" />
                    <span>Cancel Anytime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#F57B44]" />
                    <span>Instant Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 tracking-tight">
              Everything You Need to Power Solar Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional tools trusted by solar installers, energy consultants, and project developers across Africa
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              const isEven = idx % 2 === 0;
              return (
                <Card
                  key={idx}
                  className={`group p-8 border-2 transition-all duration-300 ${
                    isEven 
                      ? 'bg-[#527E5F]/5 border-[#527E5F]/30 hover:border-[#527E5F] hover:shadow-[0_20px_70px_-15px_rgba(82,126,95,0.4)]'
                      : 'bg-[#F57B44]/5 border-[#F57B44]/30 hover:border-[#F57B44] hover:shadow-[0_20px_70px_-15px_rgba(245,123,68,0.4)]'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg shrink-0 ${
                      isEven 
                        ? 'bg-[#527E5F]'
                        : 'bg-[#F57B44]'
                    }`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-2xl mb-2">{feature.category}</h3>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {feature.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${isEven ? 'text-[#527E5F]' : 'text-[#F57B44]'}`} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Card className="relative overflow-hidden bg-[#527E5F] text-white p-12 sm:p-16 border-0 shadow-[0_30px_90px_-15px_rgba(82,126,95,0.5)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="relative text-center">
              <div className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                <Sparkles className="w-12 h-12" />
              </div>
              <h2 className="text-4xl sm:text-5xl mb-6 tracking-tight">
                Ready to Go Pro?
              </h2>
              <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
                Join hundreds of solar professionals using RANA-IRIS Pro to deliver accurate, professional proposals
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    setEstimateState({ ...estimateState, isPro: true });
                    setRoofState({ ...roofState, isPro: true });
                    setCompareState({ ...compareState, isPro: true });
                    setCurrentView(returnView);
                  }}
                  size="lg"
                  className="bg-white text-[#527E5F] hover:bg-white/90 rounded-xl px-12 py-6 text-xl shadow-2xl hover:shadow-white/30 transition-all duration-300"
                >
                  <CreditCard className="w-6 h-6 mr-2" />
                  Subscribe Now - ${displayPrice}/{billingCycle === "monthly" ? "mo" : "yr"}
                </Button>
                
                <Button
                  onClick={() => setCurrentView(returnView)}
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 rounded-xl px-12 py-6 text-xl transition-all duration-300"
                >
                  Continue with Free
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 mt-8 text-sm">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Cancel Anytime</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Zap className="w-4 h-4" />
                  <span>Instant Access</span>
                </div>
              </div>

              <p className="text-sm text-white/80 mt-6">
                {billingCycle === "annual" 
                  ? "Annual subscription • Billed once per year • Cancel anytime"
                  : "Monthly subscription • Billed monthly • Cancel anytime"
                }
              </p>
            </div>
          </Card>
        </section>
      </div>
    );
  }

  // ==================== FLOW A: ESTIMATE MY SAVINGS ====================
  if (currentView === "flow-estimate") {
    const steps: EstimateStep[] = ["site", "usage", "preferences"];
    const currentStepIndex = steps.indexOf(estimateStep);
    const progressPercent = ((currentStepIndex + 1) / steps.length) * 100;

    return (
      <div className="min-h-screen bg-white">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="space-y-6 sm:space-y-8">
            
            {/* Header */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div>
                  <Button
                    variant="ghost"
                    onClick={() => setCurrentView("hero")}
                    className="mb-2 -ml-4"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                    Back
                  </Button>
                  <Badge className="mb-2 bg-[#F57B44]/10 text-[#F57B44] border-[#F57B44]/30">
                    Estimate My Savings
                  </Badge>
                  <h1 className="text-2xl sm:text-3xl tracking-tight">Quick Solar Sizing</h1>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Pro Mode</span>
                  <Switch
                    checked={estimateState.isPro}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setReturnView("flow-estimate");
                        setCurrentView("subscription");
                      } else {
                        setEstimateState({ ...estimateState, isPro: checked });
                      }
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Step {currentStepIndex + 1} of {steps.length}</span>
                  <span className="text-[#527E5F]">{Math.round(progressPercent)}% Complete</span>
                </div>
                <Progress 
                  value={progressPercent} 
                  className="h-2 bg-[#527E5F]/20 [&>div]:bg-[#527E5F]" 
                />
              </div>
            </div>

            {/* Wizard Content */}
            <Card className="p-6 sm:p-8 border-gray-200 shadow-lg">
              
              {/* STEP 1: SITE */}
              {estimateStep === "site" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl mb-2">Site Information</h2>
                    <p className="text-gray-600">Tell us about your location and property type</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="address" className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-[#527E5F]" />
                        Address or Location
                      </Label>
                      <div className="flex gap-2">
                        <Input
                          id="address"
                          placeholder="Enter city, address, or coordinates"
                          value={estimateState.address}
                          onChange={(e) => setEstimateState({ ...estimateState, address: e.target.value })}
                          className="flex-1 border-gray-300 focus:border-[#527E5F]"
                        />
                        <Button 
                          variant="outline" 
                          className="shrink-0"
                          onClick={() => setShowMapModal(true)}
                        >
                          <MapPin className="w-4 h-4 sm:mr-2" />
                          <span className="hidden sm:inline">Map</span>
                        </Button>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        Type your address or use the map (or skip - we'll use regional defaults)
                      </p>
                    </div>

                    {/* Map Modal */}
                    {showMapModal && (
                      <div className="fixed inset-0 z-50 bg-[#527E5F]/50 flex items-center justify-center p-4">
                        <Card className="w-full max-w-4xl p-6 max-h-[90vh] overflow-auto">
                          <div className="flex items-center justify-between mb-6">
                            <div>
                              <h3 className="text-2xl tracking-tight">Mark Your Location</h3>
                              <p className="text-gray-600">Click on the map to select your site location</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setShowMapModal(false)}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          {/* Map Placeholder */}
                          <div className="relative w-full h-96 rounded-xl bg-gray-100 border-2 border-gray-300 overflow-hidden mb-6">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <MapPin className="w-16 h-16 text-[#527E5F] mx-auto mb-4" />
                                <p className="text-xl mb-2">Interactive Map</p>
                                <p className="text-gray-600">Google Maps integration would appear here</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <Button
                              onClick={() => setShowMapModal(false)}
                              className="flex-1 bg-[#527E5F] text-white hover:bg-[#3d5d48] rounded-xl"
                            >
                              <CheckCircle2 className="w-4 h-4 mr-2" />
                              Confirm Location
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => setShowMapModal(false)}
                              className="rounded-xl"
                            >
                              Cancel
                            </Button>
                          </div>
                        </Card>
                      </div>
                    )}

                    <div>
                      <Label htmlFor="country" className="mb-2 block">Country</Label>
                      <Select value={estimateState.country} onValueChange={(value) => setEstimateState({ ...estimateState, country: value })}>
                        <SelectTrigger className="border-gray-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Kenya">Kenya</SelectItem>
                          <SelectItem value="Nigeria">Nigeria</SelectItem>
                          <SelectItem value="South Africa">South Africa</SelectItem>
                          <SelectItem value="Ghana">Ghana</SelectItem>
                          <SelectItem value="Tanzania">Tanzania</SelectItem>
                          <SelectItem value="Rwanda">Rwanda</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="mb-3 block">Property Type</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { value: "home" as BuildingType, label: "Home", icon: Home },
                          { value: "sme" as BuildingType, label: "SME / Business", icon: Building2 },
                          { value: "community" as BuildingType, label: "Community", icon: Users }
                        ].map(({ value, label, icon: Icon }) => (
                          <button
                            key={value}
                            onClick={() => setEstimateState({ ...estimateState, buildingType: value })}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                              estimateState.buildingType === value
                                ? "border-[#527E5F] bg-[#527E5F]/5 shadow-md"
                                : "border-gray-200 hover:border-gray-300 hover:shadow"
                            }`}
                          >
                            <Icon className={`w-6 h-6 mx-auto mb-2 ${estimateState.buildingType === value ? "text-[#527E5F]" : "text-gray-600"}`} />
                            <p className={estimateState.buildingType === value ? "text-[#527E5F]" : "text-gray-700"}>{label}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: USAGE */}
              {estimateStep === "usage" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl mb-2">Energy Usage</h2>
                    <p className="text-gray-600">Help us size your system based on your consumption</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="kwh" className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-[#F57B44]" />
                          Monthly Electricity (kWh)
                        </Label>
                        <Input
                          id="kwh"
                          type="number"
                          placeholder="500"
                          value={estimateState.monthlyKwh}
                          onChange={(e) => setEstimateState({ ...estimateState, monthlyKwh: parseFloat(e.target.value) || 0 })}
                          className="border-gray-300 focus:border-[#527E5F]"
                        />
                        <p className="text-sm text-gray-500 mt-1">Check your utility bill</p>
                      </div>

                      <div>
                        <Label htmlFor="bill" className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          Monthly Bill (USD)
                        </Label>
                        <Input
                          id="bill"
                          type="number"
                          placeholder="75"
                          value={estimateState.monthlyBill}
                          onChange={(e) => setEstimateState({ ...estimateState, monthlyBill: parseFloat(e.target.value) || 0 })}
                          className="border-gray-300 focus:border-[#527E5F]"
                        />
                        <p className="text-sm text-gray-500 mt-1">No kWh? Enter bill amount</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="tariff" className="mb-2 block">Electricity Tariff ($/kWh)</Label>
                        <Input
                          id="tariff"
                          type="number"
                          step="0.01"
                          placeholder="0.15"
                          value={estimateState.tariff}
                          onChange={(e) => setEstimateState({ ...estimateState, tariff: parseFloat(e.target.value) || 0 })}
                          className="border-gray-300 focus:border-[#527E5F]"
                        />
                        <p className="text-sm text-gray-500 mt-1">Cost per kWh from grid</p>
                      </div>

                      <div>
                        <Label htmlFor="export" className="mb-2 block">Export Rate ($/kWh)</Label>
                        <Input
                          id="export"
                          type="number"
                          step="0.01"
                          placeholder="0.08"
                          value={estimateState.exportRate}
                          onChange={(e) => setEstimateState({ ...estimateState, exportRate: parseFloat(e.target.value) || 0 })}
                          className="border-gray-300 focus:border-[#527E5F]"
                        />
                        <p className="text-sm text-gray-500 mt-1">Payment for excess energy</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <div className="text-sm text-blue-900">
                        <p>Typical ranges for {estimateState.country}: Tariff $0.10-$0.25/kWh, Export $0.05-$0.15/kWh</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: PREFERENCES */}
              {estimateStep === "preferences" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl mb-2">System Preferences</h2>
                    <p className="text-gray-600">Customize your solar system configuration</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-6">
                    <div>
                      <Label className="mb-3 block flex items-center gap-2">
                        <Percent className="w-4 h-4 text-[#527E5F]" />
                        Energy Coverage: {estimateState.coveragePercent}%
                      </Label>
                      <Slider
                        value={[estimateState.coveragePercent]}
                        onValueChange={(value) => setEstimateState({ ...estimateState, coveragePercent: value[0] })}
                        min={20}
                        max={100}
                        step={5}
                        className="[&>span]:bg-[#527E5F]"
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        Percentage of your electricity needs covered by solar
                      </p>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 hover:border-[#527E5F]/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#F6B842] flex items-center justify-center">
                          <Battery className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">Include Battery Storage</p>
                          <p className="text-sm text-gray-600">Store excess energy for nighttime use</p>
                        </div>
                      </div>
                      <Switch
                        checked={estimateState.includeBattery}
                        onCheckedChange={(checked) => setEstimateState({ ...estimateState, includeBattery: checked })}
                      />
                    </div>

                    <div>
                      <Label className="mb-3 block">Financing Option</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { value: "buy" as FinanceType, label: "Buy Outright", desc: "Full ownership" },
                          { value: "lease" as FinanceType, label: "Lease", desc: "Monthly payments" },
                          { value: "payg" as FinanceType, label: "Pay-as-you-go", desc: "Flexible terms" }
                        ].map(({ value, label, desc }) => (
                          <button
                            key={value}
                            onClick={() => setEstimateState({ ...estimateState, financeType: value })}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                              estimateState.financeType === value
                                ? "border-[#527E5F] bg-[#527E5F]/5 shadow-md"
                                : "border-gray-200 hover:border-gray-300 hover:shadow"
                            }`}
                          >
                            <p className={estimateState.financeType === value ? "text-[#527E5F]" : "text-gray-900"}>{label}</p>
                            <p className="text-sm text-gray-600 mt-1">{desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Advanced Options (Collapsed by default) */}
                    {estimateState.isPro && (
                      <div className="border-t pt-6">
                        <button
                          onClick={() => setShowEstimateAdvanced(!showEstimateAdvanced)}
                          className="flex items-center justify-between w-full p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <Settings className="w-5 h-5 text-[#527E5F]" />
                            <span className="font-medium">Advanced Settings</span>
                            <Badge className="bg-[#F57B44] text-white text-xs">PRO</Badge>
                          </div>
                          {showEstimateAdvanced ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>

                        {showEstimateAdvanced && (
                          <div className="mt-4 space-y-4 p-4 rounded-xl bg-gray-50">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="panel-w" className="mb-2 block text-sm">Panel Wattage (W)</Label>
                                <Input
                                  id="panel-w"
                                  type="number"
                                  value={estimateState.panelWattage}
                                  onChange={(e) => setEstimateState({ ...estimateState, panelWattage: parseFloat(e.target.value) || 450 })}
                                  className="border-gray-300"
                                />
                              </div>
                              <div>
                                <Label htmlFor="inverter-kw" className="mb-2 block text-sm">Inverter Size (kW)</Label>
                                <Input
                                  id="inverter-kw"
                                  type="number"
                                  step="0.5"
                                  value={estimateState.inverterKw}
                                  onChange={(e) => setEstimateState({ ...estimateState, inverterKw: parseFloat(e.target.value) || 5 })}
                                  className="border-gray-300"
                                />
                              </div>
                              <div>
                                <Label htmlFor="pr" className="mb-2 block text-sm">Performance Ratio</Label>
                                <Input
                                  id="pr"
                                  type="number"
                                  step="0.01"
                                  value={estimateState.performanceRatio}
                                  onChange={(e) => setEstimateState({ ...estimateState, performanceRatio: parseFloat(e.target.value) || 0.80 })}
                                  className="border-gray-300"
                                />
                              </div>
                              <div>
                                <Label htmlFor="co2" className="mb-2 block text-sm">CO₂ Factor (kg/kWh)</Label>
                                <Input
                                  id="co2"
                                  type="number"
                                  step="0.1"
                                  value={estimateState.co2Factor}
                                  onChange={(e) => setEstimateState({ ...estimateState, co2Factor: parseFloat(e.target.value) || 0.6 })}
                                  className="border-gray-300"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <Separator className="my-6" />
              
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                {currentStepIndex > 0 ? (
                  <Button
                    variant="outline"
                    onClick={() => {
                      const prevStep = steps[currentStepIndex - 1];
                      setEstimateStep(prevStep);
                    }}
                    className="order-2 sm:order-1"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                    Previous
                  </Button>
                ) : (
                  <div className="hidden sm:block" />
                )}

                {currentStepIndex < steps.length - 1 ? (
                  <Button
                    onClick={() => {
                      const nextStep = steps[currentStepIndex + 1];
                      setEstimateStep(nextStep);
                    }}
                    className="bg-[#527E5F] text-white hover:bg-[#3d5d48] order-1 sm:order-2"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={runEstimateSimulation}
                    className="bg-[#F57B44] text-white hover:bg-[#e06a33] order-1 sm:order-2"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Calculate Results
                  </Button>
                )}
              </div>
            </Card>

          </div>
        </main>
      </div>
    );
  }

  // ==================== RESULTS A: ESTIMATE MY SAVINGS ====================
  if (currentView === "results-estimate" && estimateResults) {
    return (
      <div className="min-h-screen bg-white">
        {/* Sticky KPI Bar */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
                <div>
                  <p className="text-xs text-gray-500">System Size</p>
                  <p className="text-lg sm:text-xl text-[#527E5F]">{estimateResults.systemSizeKwp} kWp</p>
                </div>
                <Separator orientation="vertical" className="h-10 hidden sm:block" />
                <div>
                  <p className="text-xs text-gray-500">Generation</p>
                  <p className="text-lg sm:text-xl text-[#527E5F]">{(estimateResults.annualGenerationKwh / 1000).toFixed(1)}k kWh/yr</p>
                </div>
                <Separator orientation="vertical" className="h-10 hidden sm:block" />
                <div>
                  <p className="text-xs text-gray-500">Annual Savings</p>
                  <p className="text-lg sm:text-xl text-[#527E5F]">${estimateResults.annualSavings.toLocaleString()}</p>
                </div>
                <Separator orientation="vertical" className="h-10 hidden sm:block" />
                <div>
                  <p className="text-xs text-gray-500">Payback</p>
                  <p className="text-lg sm:text-xl text-[#527E5F]">{estimateResults.simplePayback} yrs</p>
                </div>
                <Separator orientation="vertical" className="h-10 hidden md:block" />
                <div className="hidden md:block">
                  <p className="text-xs text-gray-500">CO₂ Avoided</p>
                  <p className="text-lg sm:text-xl text-[#527E5F]">{estimateResults.co2AvoidedTons} t/yr</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled={!estimateState.isPro} className="text-xs sm:text-sm">
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                  <span className="hidden sm:inline">PDF</span>
                </Button>
                <Button size="sm" className="bg-[#F57B44] text-white hover:bg-[#e06a33] text-xs sm:text-sm">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Get a Quote</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="space-y-8 sm:space-y-12">
            
            {/* Header */}
            <div className="text-center">
              <Button
                variant="ghost"
                onClick={() => {
                  setCurrentView("flow-estimate");
                  setEstimateResults(null);
                }}
                className="mb-6"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Calculator
              </Button>
              
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-300">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Simulation Complete
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-tight">
                Your Solar Savings Estimate
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                {estimateState.address || estimateState.country} • {estimateState.buildingType === "home" ? "Residential" : estimateState.buildingType === "sme" ? "SME" : "Community"} • {estimateResults.systemType === "grid-tied" ? "Grid-Tied" : estimateResults.systemType === "hybrid" ? "Hybrid" : "Off-Grid"}
              </p>
            </div>

            {/* Results Tabs */}
            <Card className="p-6 sm:p-8 border-gray-200">
              <Tabs defaultValue="energy" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="energy">
                    <Zap className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Energy</span>
                  </TabsTrigger>
                  <TabsTrigger value="finance">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Finance</span>
                  </TabsTrigger>
                  <TabsTrigger value="impact">
                    <Leaf className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Impact</span>
                  </TabsTrigger>
                  <TabsTrigger value="system">
                    <Box className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">System</span>
                  </TabsTrigger>
                </TabsList>
                
                {/* ENERGY TAB */}
                <TabsContent value="energy" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    <Card className="p-4 sm:p-6 border-gray-200">
                      <div className="w-12 h-12 rounded-xl bg-[#F6B842] flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-[#527E5F] mb-2">Annual Generation</h3>
                      <p className="text-2xl sm:text-3xl mb-1">{estimateResults.annualGenerationKwh.toLocaleString()}</p>
                      <p className="text-gray-600">kWh per year</p>
                    </Card>

                    <Card className="p-4 sm:p-6 border-gray-200">
                      <div className="w-12 h-12 rounded-xl bg-[#527E5F] flex items-center justify-center mb-4">
                        <Sun className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-[#527E5F] mb-2">Peak Sun Hours</h3>
                      <p className="text-2xl sm:text-3xl mb-1">{estimateResults.peakSunHours}</p>
                      <p className="text-gray-600">hours/day average</p>
                    </Card>

                    <Card className="p-4 sm:p-6 border-gray-200">
                      <div className="w-12 h-12 rounded-xl bg-[#F57B44] flex items-center justify-center mb-4">
                        <Gauge className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-[#527E5F] mb-2">Suitability Index</h3>
                      <p className="text-2xl sm:text-3xl mb-1">{estimateResults.suitabilityIndex}%</p>
                      <p className="text-gray-600">Excellent location</p>
                    </Card>
                  </div>

                  {estimateState.isPro ? (
                    <div>
                      <h3 className="text-xl mb-4">Monthly Generation Profile</h3>
                      <div className="grid grid-cols-12 gap-1 sm:gap-2">
                        {estimateResults.monthlyGeneration.map((value, idx) => {
                          const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                          const maxValue = Math.max(...estimateResults.monthlyGeneration);
                          const heightPercent = (value / maxValue) * 100;
                          
                          return (
                            <div key={idx} className="flex flex-col items-center gap-2">
                              <div className="text-xs text-gray-600 hidden sm:block">{Math.round(value)}</div>
                              <div className="w-full bg-gray-100 rounded-t-lg relative h-24 sm:h-32">
                                <div 
                                  className="absolute bottom-0 w-full bg-[#F57B44] rounded-t-lg transition-all"
                                  style={{ height: `${heightPercent}%` }}
                                />
                              </div>
                              <div className="text-xs text-gray-500">{months[idx]}</div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-6 p-4 sm:p-6 rounded-xl bg-gray-50">
                        <h4 className="text-[#527E5F] mb-4">Performance Ratio & Losses</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Performance Ratio</p>
                            <p className="text-xl sm:text-2xl">{estimateResults.performanceRatio}%</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Shading Loss</p>
                            <p className="text-xl sm:text-2xl">{estimateResults.losses.shading}%</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Soiling Loss</p>
                            <p className="text-xl sm:text-2xl">{estimateResults.losses.soiling}%</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Temperature Loss</p>
                            <p className="text-xl sm:text-2xl">{estimateResults.losses.temperature}%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 sm:p-8 rounded-xl bg-gray-50 border-2 border-dashed border-gray-300 text-center">
                      <Lock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl mb-2">Unlock Monthly Charts & Loss Analysis</h3>
                      <p className="text-gray-600 mb-4">Get detailed monthly generation charts and performance breakdown</p>
                      <Button onClick={() => {
                        setReturnView("results-estimate");
                        setCurrentView("subscription");
                      }} className="bg-[#F57B44] text-white hover:bg-[#e06a33]">
                        Upgrade to Pro
                      </Button>
                    </div>
                  )}
                </TabsContent>
                
                {/* FINANCE TAB */}
                <TabsContent value="finance" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    <Card className="p-4 sm:p-6 border-gray-200">
                      <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-4">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-[#527E5F] mb-2">Annual Savings</h3>
                      <p className="text-2xl sm:text-3xl mb-1">${estimateResults.annualSavings.toLocaleString()}</p>
                      <p className="text-gray-600">Year 1 savings</p>
                    </Card>

                    <Card className="p-4 sm:p-6 border-gray-200">
                      <div className="w-12 h-12 rounded-xl bg-[#527E5F] flex items-center justify-center mb-4">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-[#527E5F] mb-2">Simple Payback</h3>
                      <p className="text-2xl sm:text-3xl mb-1">{estimateResults.simplePayback}</p>
                      <p className="text-gray-600">years</p>
                    </Card>

                    <Card className="p-4 sm:p-6 border-gray-200">
                      <div className="w-12 h-12 rounded-xl bg-[#F6B842] flex items-center justify-center mb-4">
                        <PiggyBank className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-[#527E5F] mb-2">25-Year Savings</h3>
                      <p className="text-2xl sm:text-3xl mb-1">${(estimateResults.annualSavings * 20).toLocaleString()}</p>
                      <p className="text-gray-600">estimated total</p>
                    </Card>
                  </div>

                  {estimateState.isPro ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-xl bg-gray-50">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">ROI</p>
                        <p className="text-xl sm:text-2xl text-[#527E5F]">{estimateResults.roi}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">NPV</p>
                        <p className="text-xl sm:text-2xl text-[#527E5F]">${estimateResults.npv.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">IRR</p>
                        <p className="text-xl sm:text-2xl text-[#527E5F]">{estimateResults.irr}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">LCOE</p>
                        <p className="text-xl sm:text-2xl text-[#527E5F]">${estimateResults.lcoe}/kWh</p>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 sm:p-8 rounded-xl bg-gray-50 border-2 border-dashed border-gray-300 text-center">
                      <Lock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl mb-2">Unlock Advanced Financial Models</h3>
                      <p className="text-gray-600 mb-4">Access ROI, NPV, IRR, and LCOE calculations</p>
                      <Button onClick={() => {
                        setReturnView("results-estimate");
                        setCurrentView("subscription");
                      }} className="bg-[#F57B44] text-white hover:bg-[#e06a33]">
                        Upgrade to Pro
                      </Button>
                    </div>
                  )}
                </TabsContent>

                {/* IMPACT TAB */}
                <TabsContent value="impact" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <Card className="p-4 sm:p-6 border-gray-200">
                      <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-4">
                        <Leaf className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-[#527E5F] mb-2">CO₂ Avoided Annually</h3>
                      <p className="text-2xl sm:text-3xl mb-1">{estimateResults.co2AvoidedTons}</p>
                      <p className="text-gray-600">metric tons CO₂e/year</p>
                    </Card>

                    <Card className="p-4 sm:p-6 border-gray-200">
                      <div className="w-12 h-12 rounded-xl bg-[#527E5F] flex items-center justify-center mb-4">
                        <TreePine className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-[#527E5F] mb-2">Equivalent to</h3>
                      <p className="text-2xl sm:text-3xl mb-1">{estimateResults.impactEquivalents.trees}</p>
                      <p className="text-gray-600">trees planted per year</p>
                    </Card>
                  </div>

                  <Card className="p-4 sm:p-6 border-gray-200 bg-blue-50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                        <Car className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-[#527E5F] mb-2">Carbon Impact</h3>
                        <p className="text-gray-700 mb-3">
                          Your solar system will offset the equivalent of taking <strong>{estimateResults.impactEquivalents.cars} cars</strong> off the road for a year.
                        </p>
                        <p className="text-sm text-gray-600">
                          Impact verified through RanaMeter + RanaID MRV system post-installation
                        </p>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                {/* SYSTEM TAB */}
                <TabsContent value="system" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <Card className="p-4 sm:p-6 border-gray-200">
                      <h3 className="text-[#527E5F] mb-4">System Configuration</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">System Size</span>
                          <span className="font-medium">{estimateResults.systemSizeKwp} kWp</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Panel Count</span>
                          <span className="font-medium">{estimateResults.panelCount} panels</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">System Type</span>
                          <span className="font-medium capitalize">{estimateResults.systemType.replace("-", " ")}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Mounting</span>
                          <span className="font-medium">{estimateResults.mountingType}</span>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4 sm:p-6 border-gray-200">
                      <h3 className="text-[#527E5F] mb-4">Component Details</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Solar Panels</p>
                          <p className="font-medium">{estimateResults.componentDetails.solarStack}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Inverter</p>
                          <p className="font-medium">{estimateResults.componentDetails.inverterType}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Battery Storage</p>
                          <p className="font-medium">{estimateResults.componentDetails.batteryType}</p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <div className="p-4 sm:p-6 rounded-xl bg-blue-50 border border-blue-200">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                      <div className="text-sm text-blue-900">
                        <p className="mb-2"><strong>Note:</strong> These are pre-installation estimates based on regional data and industry-standard assumptions.</p>
                        <p>Final system verification and impact tracking provided through RanaMeter device post-installation.</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>

            {/* Next Steps */}
            <Card className="p-6 sm:p-8 border-gray-200 bg-[#527E5F]/5">
              <h2 className="text-2xl mb-6 text-center">Next Steps</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Button size="lg" className="bg-[#F57B44] text-white hover:bg-[#e06a33]">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote from Partner
                </Button>
                <Button size="lg" variant="outline" disabled={!estimateState.isPro}>
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF Report
                </Button>
                <Button size="lg" variant="outline" disabled={!estimateState.isPro}>
                  <Save className="w-5 h-5 mr-2" />
                  Save to Portfolio
                </Button>
              </div>
            </Card>

          </div>
        </main>
      </div>
    );
  }

  // ==================== FLOW B: MAP MY ROOF ====================
  if (currentView === "flow-roof") {
    const steps: RoofStep[] = ["roof-area", "panel-placement", "options"];
    const currentStepIndex = steps.indexOf(roofStep);
    const progressPercent = ((currentStepIndex + 1) / steps.length) * 100;

    // Calculate optimal panel count based on roof area (system calculates, not user)
    // Assuming ~2sqm per panel and 75% usable roof area (accounting for spacing, walkways, edge clearance)
    const usableRoofArea = roofState.roofAreaSqm * 0.75;
    const liveCalculatedPanels = Math.floor(usableRoofArea / 2);
    
    // Calculate live KWp from calculated panel count
    const liveKwp = (liveCalculatedPanels * roofState.panelWattage) / 1000;
    const liveRoofCoverage = (liveCalculatedPanels * 2) / roofState.roofAreaSqm * 100;

    return (
      <div className="min-h-screen bg-white">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="space-y-6 sm:space-y-8">
            
            {/* Header */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div>
                  <Button
                    variant="ghost"
                    onClick={() => setCurrentView("hero")}
                    className="mb-2 -ml-4"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                    Back
                  </Button>
                  <Badge className="mb-2 bg-[#527E5F]/10 text-[#527E5F] border-[#527E5F]/30">
                    Map My Roof
                  </Badge>
                  <h1 className="text-2xl sm:text-3xl tracking-tight">Visual Roof Layout</h1>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Pro Mode</span>
                  <Switch
                    checked={roofState.isPro}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setReturnView("flow-roof");
                        setCurrentView("subscription");
                      } else {
                        setRoofState({ ...roofState, isPro: checked });
                      }
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Step {currentStepIndex + 1} of {steps.length}</span>
                  <span className="text-[#527E5F]">{Math.round(progressPercent)}% Complete</span>
                </div>
                <Progress 
                  value={progressPercent} 
                  className="h-2 bg-[#527E5F]/20 [&>div]:bg-[#527E5F]" 
                />
              </div>
            </div>

            {/* Wizard Content */}
            <Card className="p-6 sm:p-8 border-gray-200 shadow-lg">
              
              {/* STEP 1: ROOF AREA */}
              {roofStep === "roof-area" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl mb-2">Map Your Roof</h2>
                    <p className="text-gray-600">Define your roof area and characteristics</p>
                  </div>
                  
                  <Separator />
                  
                  {/* Mock Map Canvas */}
                  <div className="relative w-full h-64 sm:h-96 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Grid3x3 className="w-16 h-16 text-[#527E5F] mx-auto mb-4" />
                        <p className="text-xl mb-2">Interactive Roof Map</p>
                        <p className="text-gray-600 mb-4">Draw polygon tool would appear here</p>
                        <p className="text-sm text-gray-500">Click to mark roof boundaries</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="roof-area" className="mb-2 block">Roof Area (sq meters)</Label>
                      <Input
                        id="roof-area"
                        type="number"
                        placeholder="50"
                        value={roofState.roofAreaSqm}
                        onChange={(e) => setRoofState({ ...roofState, roofAreaSqm: parseFloat(e.target.value) || 50 })}
                        className="border-gray-300 focus:border-[#527E5F]"
                      />
                      <p className="text-sm text-gray-500 mt-1">Or enter manually if mapping unavailable</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="tilt" className="mb-2 block">Roof Tilt (degrees)</Label>
                        <Slider
                          value={[roofState.tilt]}
                          onValueChange={(value) => setRoofState({ ...roofState, tilt: value[0] })}
                          min={0}
                          max={45}
                          step={5}
                          className="[&>span]:bg-[#527E5F]"
                        />
                        <p className="text-sm text-gray-600 mt-1">{roofState.tilt}° from horizontal</p>
                      </div>

                      <div>
                        <Label htmlFor="azimuth" className="mb-2 block">Azimuth (orientation)</Label>
                        <Select value={roofState.azimuth.toString()} onValueChange={(value) => setRoofState({ ...roofState, azimuth: parseInt(value) })}>
                          <SelectTrigger className="border-gray-300">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">North (0°)</SelectItem>
                            <SelectItem value="90">East (90°)</SelectItem>
                            <SelectItem value="180">South (180°)</SelectItem>
                            <SelectItem value="270">West (270°)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label className="mb-3 block">Shading Level</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { value: "none" as ShadingLevel, label: "None", icon: Sun },
                          { value: "light" as ShadingLevel, label: "Light", icon: CloudDrizzle },
                          { value: "medium" as ShadingLevel, label: "Medium", icon: Cloud },
                          { value: "heavy" as ShadingLevel, label: "Heavy", icon: CloudRain }
                        ].map(({ value, label, icon: Icon }) => (
                          <button
                            key={value}
                            onClick={() => setRoofState({ ...roofState, shadingLevel: value })}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                              roofState.shadingLevel === value
                                ? "border-[#527E5F] bg-[#527E5F]/5 shadow-md"
                                : "border-gray-200 hover:border-gray-300 hover:shadow"
                            }`}
                          >
                            <Icon className={`w-6 h-6 mx-auto mb-2 ${roofState.shadingLevel === value ? "text-[#527E5F]" : "text-gray-600"}`} />
                            <p className={`text-sm ${roofState.shadingLevel === value ? "text-[#527E5F]" : "text-gray-700"}`}>{label}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: PANEL PLACEMENT */}
              {roofStep === "panel-placement" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl mb-2">Suggested Panel Layout</h2>
                    <p className="text-gray-600">Based on your roof dimensions, we recommend the following configuration</p>
                  </div>
                  
                  <Separator />
                  
                  {/* Calculated Panel Recommendation */}
                  <div className="p-6 rounded-xl bg-gradient-to-br from-[#527E5F]/10 to-[#F57B44]/10 border-2 border-[#527E5F]/30">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#527E5F] flex items-center justify-center shrink-0">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-[#527E5F] mb-1">Optimized for Your Roof</h3>
                        <p className="text-sm text-gray-600">
                          We've calculated the optimal panel configuration based on your {roofState.roofAreaSqm}m² roof area, 
                          accounting for spacing, walkways, and industry best practices.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-white border border-gray-200">
                        <p className="text-sm text-gray-600 mb-1">Recommended Panels</p>
                        <p className="text-3xl text-[#527E5F]">{liveCalculatedPanels}</p>
                        <p className="text-xs text-gray-500 mt-1">Based on {roofState.panelWattage}W panels</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-gray-200">
                        <p className="text-sm text-gray-600 mb-1">System Size</p>
                        <p className="text-3xl text-[#527E5F]">{liveKwp.toFixed(2)}</p>
                        <p className="text-xs text-gray-500 mt-1">kWp total capacity</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-gray-200">
                        <p className="text-sm text-gray-600 mb-1">Roof Coverage</p>
                        <p className="text-3xl text-[#527E5F]">{liveRoofCoverage.toFixed(0)}%</p>
                        <p className="text-xs text-gray-500 mt-1">Optimal utilization</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mock Panel Layout Visualization */}
                  <div className="relative w-full h-64 sm:h-80 rounded-xl bg-gray-50 border-2 border-gray-300 overflow-hidden">
                    <div className="absolute inset-0 p-4">
                      <div className="grid grid-cols-10 gap-1 h-full">
                        {Array.from({ length: Math.min(liveCalculatedPanels, 50) }).map((_, i) => (
                          <div
                            key={i}
                            className="bg-[#F57B44] rounded-sm opacity-80 hover:opacity-100 transition-opacity"
                            style={{ height: "20px" }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200">
                      <p className="text-xs text-gray-500">Roof Area</p>
                      <p className="text-sm text-[#527E5F]">{roofState.roofAreaSqm}m²</p>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-200">
                      <p className="text-xs text-gray-500 mb-1">Panel Layout Preview</p>
                      <p className="text-sm text-gray-600">{liveCalculatedPanels} panels × {roofState.panelWattage}W</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200">
                    <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-900">
                      <p><strong>Why this configuration?</strong> Our recommendation factors in optimal panel spacing (10-15cm), 
                      maintenance walkways, roof edge clearance, and a DC/AC ratio of 1.2:1 for maximum efficiency.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: OPTIONS */}
              {roofStep === "options" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl mb-2">System Options</h2>
                    <p className="text-gray-600">Configure battery and financing</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 hover:border-[#527E5F]/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#F6B842] flex items-center justify-center">
                          <Battery className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">Include Battery Storage</p>
                          <p className="text-sm text-gray-600">Store excess energy for nighttime use</p>
                        </div>
                      </div>
                      <Switch
                        checked={roofState.includeBattery}
                        onCheckedChange={(checked) => setRoofState({ ...roofState, includeBattery: checked })}
                      />
                    </div>

                    {roofState.includeBattery && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-xl bg-gray-50">
                        <div>
                          <Label htmlFor="battery-cap" className="mb-2 block">Battery Capacity (kWh)</Label>
                          <Input
                            id="battery-cap"
                            type="number"
                            value={roofState.batteryCapacity}
                            onChange={(e) => setRoofState({ ...roofState, batteryCapacity: parseFloat(e.target.value) || 10 })}
                            className="border-gray-300"
                          />
                        </div>
                        <div>
                          <Label htmlFor="autonomy" className="mb-2 block">Days of Autonomy</Label>
                          <Input
                            id="autonomy"
                            type="number"
                            value={roofState.autonomyDays}
                            onChange={(e) => setRoofState({ ...roofState, autonomyDays: parseInt(e.target.value) || 2 })}
                            className="border-gray-300"
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <Label className="mb-3 block">Financing Option</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { value: "buy" as FinanceType, label: "Buy Outright", desc: "Full ownership" },
                          { value: "lease" as FinanceType, label: "Lease", desc: "Monthly payments" },
                          { value: "payg" as FinanceType, label: "Pay-as-you-go", desc: "Flexible terms" }
                        ].map(({ value, label, desc }) => (
                          <button
                            key={value}
                            onClick={() => setRoofState({ ...roofState, financeType: value })}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                              roofState.financeType === value
                                ? "border-[#527E5F] bg-[#527E5F]/5 shadow-md"
                                : "border-gray-200 hover:border-gray-300 hover:shadow"
                            }`}
                          >
                            <p className={roofState.financeType === value ? "text-[#527E5F]" : "text-gray-900"}>{label}</p>
                            <p className="text-sm text-gray-600 mt-1">{desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Advanced Options */}
                    {roofState.isPro && (
                      <div className="border-t pt-6">
                        <button
                          onClick={() => setShowRoofAdvanced(!showRoofAdvanced)}
                          className="flex items-center justify-between w-full p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <Settings className="w-5 h-5 text-[#527E5F]" />
                            <span className="font-medium">Advanced Settings</span>
                            <Badge className="bg-[#F57B44] text-white text-xs">PRO</Badge>
                          </div>
                          {showRoofAdvanced ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>

                        {showRoofAdvanced && (
                          <div className="mt-4 space-y-4 p-4 rounded-xl bg-gray-50">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="panel-w-roof" className="mb-2 block text-sm">Panel Wattage (W)</Label>
                                <Input
                                  id="panel-w-roof"
                                  type="number"
                                  value={roofState.panelWattage}
                                  onChange={(e) => setRoofState({ ...roofState, panelWattage: parseFloat(e.target.value) || 450 })}
                                  className="border-gray-300"
                                />
                              </div>
                              <div>
                                <Label htmlFor="pr-roof" className="mb-2 block text-sm">Performance Ratio</Label>
                                <Input
                                  id="pr-roof"
                                  type="number"
                                  step="0.01"
                                  value={roofState.performanceRatio}
                                  onChange={(e) => setRoofState({ ...roofState, performanceRatio: parseFloat(e.target.value) || 0.80 })}
                                  className="border-gray-300"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <Separator className="my-6" />
              
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                {currentStepIndex > 0 ? (
                  <Button
                    variant="outline"
                    onClick={() => {
                      const prevStep = steps[currentStepIndex - 1];
                      setRoofStep(prevStep);
                    }}
                    className="order-2 sm:order-1"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                    Previous
                  </Button>
                ) : (
                  <div className="hidden sm:block" />
                )}

                {currentStepIndex < steps.length - 1 ? (
                  <Button
                    onClick={() => {
                      const nextStep = steps[currentStepIndex + 1];
                      setRoofStep(nextStep);
                      // Update systemSizeKwp when moving forward
                      if (roofStep === "panel-placement") {
                        setRoofState({
                          ...roofState,
                          systemSizeKwp: (roofState.panelCount * roofState.panelWattage) / 1000,
                          roofCoverage: (roofState.panelCount * 2) / roofState.roofAreaSqm * 100
                        });
                      }
                    }}
                    className="bg-[#527E5F] text-white hover:bg-[#3d5d48] order-1 sm:order-2"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      // Update final values before running simulation
                      setRoofState({
                        ...roofState,
                        systemSizeKwp: (roofState.panelCount * roofState.panelWattage) / 1000,
                        roofCoverage: (roofState.panelCount * 2) / roofState.roofAreaSqm * 100
                      });
                      runRoofSimulation();
                    }}
                    className="bg-[#F57B44] text-white hover:bg-[#e06a33] order-1 sm:order-2"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Calculate Results
                  </Button>
                )}
              </div>
            </Card>

          </div>
        </main>
      </div>
    );
  }

  // ==================== RESULTS B: MAP MY ROOF ====================
  if (currentView === "results-roof" && roofResults) {
    return (
      <div className="min-h-screen bg-white">
        {/* Sticky KPI Bar (same as estimate) */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
                <div>
                  <p className="text-xs text-gray-500">System Size</p>
                  <p className="text-lg sm:text-xl text-[#527E5F]">{roofResults.systemSizeKwp} kWp</p>
                </div>
                <Separator orientation="vertical" className="h-10 hidden sm:block" />
                <div>
                  <p className="text-xs text-gray-500">Panels</p>
                  <p className="text-lg sm:text-xl text-[#527E5F]">{roofResults.panelCount}</p>
                </div>
                <Separator orientation="vertical" className="h-10 hidden sm:block" />
                <div>
                  <p className="text-xs text-gray-500">Annual Savings</p>
                  <p className="text-lg sm:text-xl text-[#527E5F]">${roofResults.annualSavings.toLocaleString()}</p>
                </div>
                <Separator orientation="vertical" className="h-10 hidden sm:block" />
                <div>
                  <p className="text-xs text-gray-500">Payback</p>
                  <p className="text-lg sm:text-xl text-[#527E5F]">{roofResults.simplePayback} yrs</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled={!roofState.isPro}>
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                  <span className="hidden sm:inline">PDF</span>
                </Button>
                <Button size="sm" className="bg-[#F57B44] text-white hover:bg-[#e06a33]">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Get a Quote</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="space-y-8 sm:space-y-12">
            
            {/* Header */}
            <div className="text-center">
              <Button
                variant="ghost"
                onClick={() => {
                  setCurrentView("flow-roof");
                  setRoofResults(null);
                }}
                className="mb-6"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Layout Tool
              </Button>
              
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-300">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Roof Layout Complete
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-tight">
                Your Roof Solar Layout
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                {roofResults.panelCount} panels • {roofResults.systemSizeKwp} kWp • {roofResults.layoutSummary?.orientation} facing
              </p>
            </div>

            {/* Layout Summary Card */}
            {roofResults.layoutSummary && (
              <Card className="p-6 sm:p-8 border-gray-200 bg-[#527E5F]/5">
                <h2 className="text-2xl mb-6 flex items-center gap-2">
                  <Grid3x3 className="w-6 h-6 text-[#527E5F]" />
                  Layout Summary
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Panel Rows</p>
                    <p className="text-2xl text-[#527E5F]">{roofResults.layoutSummary.panelRows}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Tilt Angle</p>
                    <p className="text-2xl text-[#527E5F]">{roofResults.layoutSummary.tilt}°</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Orientation</p>
                    <p className="text-2xl text-[#527E5F]">{roofResults.layoutSummary.orientation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Roof Coverage</p>
                    <p className="text-2xl text-[#527E5F]">{roofResults.layoutSummary.roofCoverage.toFixed(0)}%</p>
                  </div>
                </div>
              </Card>
            )}

            {/* Same Tabs as Estimate (Energy, Finance, Impact, System) */}
            <Card className="p-6 sm:p-8 border-gray-200">
              <p className="text-center text-gray-600 mb-4">Full results with tabs (Energy, Finance, Impact, System) would display here, similar to Estimate flow</p>
              <div className="flex justify-center gap-4">
                <Button size="lg" className="bg-[#F57B44] text-white hover:bg-[#e06a33]">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote from Partner
                </Button>
                <Button size="lg" variant="outline" disabled={!roofState.isPro}>
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </Button>
              </div>
            </Card>

          </div>
        </main>
      </div>
    );
  }

  // ==================== FLOW C: COMPARE MY OPTIONS ====================
  if (currentView === "flow-compare") {
    const steps: CompareStep[] = ["select-scenarios", "configure-scenarios"];
    const currentStepIndex = steps.indexOf(compareStep);
    const progressPercent = ((currentStepIndex + 1) / steps.length) * 100;

    const scenarioOptions = [
      { type: "new" as SystemType, label: "New System", desc: "Fresh solar installation", icon: Sparkles },
      { type: "upgrade" as SystemType, label: "Upgrade Existing", desc: "Expand current system", icon: TrendingUp },
      { type: "battery-only" as SystemType, label: "Add Battery Only", desc: "Storage addition", icon: Battery }
    ];

    return (
      <div className="min-h-screen bg-white">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="space-y-6 sm:space-y-8">
            
            {/* Header */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div>
                  <Button
                    variant="ghost"
                    onClick={() => setCurrentView("hero")}
                    className="mb-2 -ml-4"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                    Back
                  </Button>
                  <Badge className="mb-2 bg-[#F6B842]/10 text-[#F6B842] border-[#F6B842]/30">
                    Compare My Options
                  </Badge>
                  <h1 className="text-2xl sm:text-3xl tracking-tight">Scenario Builder</h1>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Pro Mode</span>
                  <Switch
                    checked={compareState.isPro}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setReturnView("flow-compare");
                        setCurrentView("subscription");
                      } else {
                        setCompareState({ ...compareState, isPro: checked });
                      }
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Step {currentStepIndex + 1} of {steps.length}</span>
                  <span className="text-[#527E5F]">{Math.round(progressPercent)}% Complete</span>
                </div>
                <Progress 
                  value={progressPercent} 
                  className="h-2 bg-[#527E5F]/20 [&>div]:bg-[#527E5F]" 
                />
              </div>
            </div>

            {/* Wizard Content */}
            <Card className="p-6 sm:p-8 border-gray-200 shadow-lg">
              
              {/* STEP 1: SELECT SCENARIOS */}
              {compareStep === "select-scenarios" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl mb-2">Select Scenarios to Compare</h2>
                    <p className="text-gray-600">Choose up to 3 scenarios for side-by-side comparison</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    {scenarioOptions.map(({ type, label, desc, icon: Icon }) => {
                      const isSelected = compareState.selectedScenarios.includes(type);
                      return (
                        <button
                          key={type}
                          onClick={() => {
                            if (isSelected) {
                              setCompareState({
                                ...compareState,
                                selectedScenarios: compareState.selectedScenarios.filter(s => s !== type)
                              });
                            } else if (compareState.selectedScenarios.length < 3) {
                              setCompareState({
                                ...compareState,
                                selectedScenarios: [...compareState.selectedScenarios, type],
                                scenarios: {
                                  ...compareState.scenarios,
                                  [type]: {
                                    type,
                                    size: 5,
                                    battery: false,
                                    batteryCapacity: 10,
                                    finance: "buy",
                                    existingKwp: type === "upgrade" ? 3 : 0
                                  }
                                }
                              });
                            }
                          }}
                          disabled={!isSelected && compareState.selectedScenarios.length >= 3}
                          className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                            isSelected
                              ? "border-[#527E5F] bg-[#527E5F]/5 shadow-md"
                              : "border-gray-200 hover:border-gray-300 hover:shadow disabled:opacity-50 disabled:cursor-not-allowed"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isSelected ? "bg-[#527E5F]" : "bg-gray-200"}`}>
                                <Icon className={`w-6 h-6 ${isSelected ? "text-white" : "text-gray-500"}`} />
                              </div>
                              <div>
                                <p className={isSelected ? "text-[#527E5F] font-medium" : "text-gray-900"}>{label}</p>
                                <p className="text-sm text-gray-600">{desc}</p>
                              </div>
                            </div>
                            {isSelected && <CheckCircle2 className="w-6 h-6 text-[#527E5F]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <div className="text-sm text-blue-900">
                        <p>Selected: <strong>{compareState.selectedScenarios.length}/3</strong> scenarios. Select at least 2 to compare.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: CONFIGURE SCENARIOS */}
              {compareStep === "configure-scenarios" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl mb-2">Configure Each Scenario</h2>
                    <p className="text-gray-600">Set parameters for your selected scenarios</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-6">
                    {compareState.selectedScenarios.map((scenarioType) => {
                      const scenario = compareState.scenarios[scenarioType]!;
                      const scenarioInfo = scenarioOptions.find(s => s.type === scenarioType)!;
                      const Icon = scenarioInfo.icon;

                      return (
                        <Card key={scenarioType} className="p-4 sm:p-6 border-2 border-[#527E5F]/30">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-[#527E5F] flex items-center justify-center">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg text-[#527E5F]">{scenarioInfo.label}</h3>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {scenarioType !== "battery-only" && (
                              <div>
                                <Label className="mb-2 block text-sm">System Size (kWp)</Label>
                                <Input
                                  type="number"
                                  value={scenario.size}
                                  onChange={(e) => {
                                    setCompareState({
                                      ...compareState,
                                      scenarios: {
                                        ...compareState.scenarios,
                                        [scenarioType]: { ...scenario, size: parseFloat(e.target.value) || 5 }
                                      }
                                    });
                                  }}
                                  className="border-gray-300"
                                />
                              </div>
                            )}

                            <div className="flex items-center justify-between">
                              <Label className="text-sm">Include Battery</Label>
                              <Switch
                                checked={scenario.battery}
                                onCheckedChange={(checked) => {
                                  setCompareState({
                                    ...compareState,
                                    scenarios: {
                                      ...compareState.scenarios,
                                      [scenarioType]: { ...scenario, battery: checked }
                                    }
                                  });
                                }}
                              />
                            </div>

                            {scenario.battery && (
                              <div>
                                <Label className="mb-2 block text-sm">Battery Capacity (kWh)</Label>
                                <Input
                                  type="number"
                                  value={scenario.batteryCapacity}
                                  onChange={(e) => {
                                    setCompareState({
                                      ...compareState,
                                      scenarios: {
                                        ...compareState.scenarios,
                                        [scenarioType]: { ...scenario, batteryCapacity: parseFloat(e.target.value) || 10 }
                                      }
                                    });
                                  }}
                                  className="border-gray-300"
                                />
                              </div>
                            )}

                            <div>
                              <Label className="mb-2 block text-sm">Finance</Label>
                              <Select 
                                value={scenario.finance} 
                                onValueChange={(value: FinanceType) => {
                                  setCompareState({
                                    ...compareState,
                                    scenarios: {
                                      ...compareState.scenarios,
                                      [scenarioType]: { ...scenario, finance: value }
                                    }
                                  });
                                }}
                              >
                                <SelectTrigger className="border-gray-300">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="buy">Buy</SelectItem>
                                  <SelectItem value="lease">Lease</SelectItem>
                                  <SelectItem value="payg">Pay-as-you-go</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            {scenarioType === "upgrade" && (
                              <div>
                                <Label className="mb-2 block text-sm">Existing System (kWp)</Label>
                                <Input
                                  type="number"
                                  value={scenario.existingKwp}
                                  onChange={(e) => {
                                    setCompareState({
                                      ...compareState,
                                      scenarios: {
                                        ...compareState.scenarios,
                                        [scenarioType]: { ...scenario, existingKwp: parseFloat(e.target.value) || 3 }
                                      }
                                    });
                                  }}
                                  className="border-gray-300"
                                />
                              </div>
                            )}
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <Separator className="my-6" />
              
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                {currentStepIndex > 0 ? (
                  <Button
                    variant="outline"
                    onClick={() => {
                      const prevStep = steps[currentStepIndex - 1];
                      setCompareStep(prevStep);
                    }}
                    className="order-2 sm:order-1"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                    Previous
                  </Button>
                ) : (
                  <div className="hidden sm:block" />
                )}

                {currentStepIndex < steps.length - 1 ? (
                  <Button
                    onClick={() => {
                      const nextStep = steps[currentStepIndex + 1];
                      setCompareStep(nextStep);
                    }}
                    disabled={compareState.selectedScenarios.length < 2}
                    className="bg-[#527E5F] text-white hover:bg-[#3d5d48] order-1 sm:order-2 disabled:opacity-50"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={runCompareSimulation}
                    disabled={compareState.selectedScenarios.length < 2}
                    className="bg-[#F57B44] text-white hover:bg-[#e06a33] order-1 sm:order-2 disabled:opacity-50"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Compare Scenarios
                  </Button>
                )}
              </div>
            </Card>

          </div>
        </main>
      </div>
    );
  }

  // ==================== RESULTS C: COMPARE MY OPTIONS ====================
  if (currentView === "results-compare" && compareResults) {
    const scenarioLabels = {
      "new": "New System",
      "upgrade": "Upgrade Existing",
      "battery-only": "Battery Only"
    };

    return (
      <div className="min-h-screen bg-white">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="space-y-8 sm:space-y-12">
            
            {/* Header */}
            <div className="text-center">
              <Button
                variant="ghost"
                onClick={() => {
                  setCurrentView("flow-compare");
                  setCompareResults(null);
                }}
                className="mb-6"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Scenario Builder
              </Button>
              
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-300">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Comparison Complete
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-tight">
                Scenario Comparison
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Side-by-side analysis of {compareResults.length} scenarios
              </p>
            </div>

            {/* Comparison Table */}
            <Card className="p-6 sm:p-8 border-gray-200 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left p-4">Metric</th>
                    {compareResults.map((result) => (
                      <th key={result.scenario} className="text-center p-4 bg-[#527E5F]/5">
                        <p className="text-[#527E5F]">{scenarioLabels[result.scenario]}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-600">Capital Cost (CAPEX)</td>
                    {compareResults.map((result) => (
                      <td key={result.scenario} className="text-center p-4">${result.capex.toLocaleString()}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="p-4 text-gray-600">Annual O&M (OPEX)</td>
                    {compareResults.map((result) => (
                      <td key={result.scenario} className="text-center p-4">${result.opex.toLocaleString()}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-600">Annual Savings</td>
                    {compareResults.map((result) => (
                      <td key={result.scenario} className="text-center p-4 text-green-600 font-medium">${result.savings.toLocaleString()}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="p-4 text-gray-600">Payback Period</td>
                    {compareResults.map((result) => (
                      <td key={result.scenario} className="text-center p-4">{result.payback} years</td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-600">ROI</td>
                    {compareResults.map((result) => (
                      <td key={result.scenario} className="text-center p-4 text-[#527E5F] font-medium">{result.roi}%</td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="p-4 text-gray-600">IRR</td>
                    {compareResults.map((result) => (
                      <td key={result.scenario} className="text-center p-4">{result.irr}%</td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-600">LCOE</td>
                    {compareResults.map((result) => (
                      <td key={result.scenario} className="text-center p-4">${result.lcoe}/kWh</td>
                    ))}
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 text-gray-600">CO₂ Avoided (tons/yr)</td>
                    {compareResults.map((result) => (
                      <td key={result.scenario} className="text-center p-4 text-green-600">{result.co2Avoided}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </Card>

            {/* Next Steps */}
            <Card className="p-6 sm:p-8 border-gray-200 bg-[#527E5F]/5">
              <h2 className="text-2xl mb-6 text-center">Next Steps</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button size="lg" className="bg-[#F57B44] text-white hover:bg-[#e06a33]">
                  <Mail className="w-5 h-5 mr-2" />
                  Request Quote for Preferred Option
                </Button>
                <Button size="lg" variant="outline" disabled={!compareState.isPro}>
                  <Download className="w-5 h-5 mr-2" />
                  Download Comparison PDF
                </Button>
              </div>
            </Card>

          </div>
        </main>
      </div>
    );
  }

  // Fallback for any unhandled views
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <Card className="p-8 max-w-2xl text-center">
        <Info className="w-16 h-16 text-[#F57B44] mx-auto mb-4" />
        <h2 className="text-2xl mb-4">Unknown View</h2>
        <p className="text-gray-600 mb-6">
          Something went wrong. Please return to the home page.
        </p>
        <Button onClick={() => setCurrentView("hero")} className="bg-[#527E5F] text-white">
          <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
          Back to Home
        </Button>
      </Card>
    </div>
  );
}

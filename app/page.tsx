"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Circle,
  CheckCircle2,
  Users,
  FileSearch,
  Lightbulb,
  FileText,
  MessageSquare,
  PlayCircle,
  Shield,
  Calendar,
  ArrowRight,
  Code2,
  RefreshCw,
  Building2,
  GitBranch,
  Database,
  Layers,
  Repeat,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const slides = [
  {
    id: 1,
    title: "Online Student Application Platform",
    subtitle: "Proposal for Full System Rebuild",
    content: (
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="text-xl text-muted-foreground leading-relaxed">
            A comprehensive proposal to rebuild the OAS from the ground
            up—preserving institutional knowledge while delivering a modern
            platform{" "}
            <span className="font-medium text-foreground">
              comparable in experience to Student Aid Alberta
            </span>
            .
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg">Staff-driven requirements capture</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg">
                Built for in-house delivery and maintenance
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <GitBranch className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg">
                Multi-program support: MTE, PSE, and beyond
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <Dialog>
            <DialogTrigger asChild>
              <button className="group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl block w-full perspective-1000">
                <div className="relative preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front - MacBook */}
                  <img
                    src="/mockup-macbook-top.png"
                    alt="Modern application dashboard concept"
                    className="rounded-xl shadow-2xl border p-6 w-full backface-hidden"
                  />
                  {/* Back - iPhone */}
                  <img
                    src="/mockup-iphone-top.png"
                    alt="Mobile view concept"
                    className="rounded-xl shadow-2xl border p-6 w-full h-full absolute inset-0 backface-hidden rotate-y-180 object-top object-scale-down"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                  Initial concept work, <em>not a final design</em>
                </div>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-7xl w-[95vw] max-h-[95vh] p-0 overflow-auto">
              <img
                src="/mockup-full.png"
                alt="Full mockup"
                className="w-full h-auto"
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Why Requirements Capture",
    subtitle: "Preserving What Works, Improving What Doesn't",
    content: (
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The existing OAS contains a decade of institutional
            knowledge—complex eligibility rules, financial estimation logic, and
            workflows refined through thousands of applications. Our approach
            ensures nothing valuable is lost, while adapting to current needs.
          </p>
          <div className="grid gap-4">
            <div className="flex gap-4 p-4 bg-card border rounded-lg">
              <FileSearch className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Review & Validate</h3>
                <p className="text-sm text-muted-foreground">
                  Confirm which features current staff actively use and value
                  across MTE, PSE, and any other programs, identify pain points
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-card border rounded-lg">
              <Lightbulb className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Reimagine & Improve</h3>
                <p className="text-sm text-muted-foreground">
                  Redesign pain points inspired by Alberta Student Aid's modern
                  experience
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-card border rounded-lg">
              <FileText className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Build & Iterate</h3>
                <p className="text-sm text-muted-foreground">
                  Develop in cycles with regular demos and feedback—see progress
                  early and often, ensure alignment and collaboration
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
          <h3 className="font-semibold text-lg mb-4">What We Deliver</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Complete feature audit with usage analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Staff workshop findings and recommendations</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Program-specific journey maps (MTE, PSE, etc.)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Financial estimation logic documentation</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Working software delivered incrementally</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Build & Iterate",
    subtitle: "How We Work Together",
    content: (
      <div className="space-y-8">
        {/* Kick-off and initial review */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary text-primary-foreground rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <PlayCircle className="h-8 w-8" />
              <h3 className="text-xl font-semibold">Kick-Off Meeting</h3>
            </div>
            <p className="text-primary-foreground/90 mb-4">
              We start with a focused session to align on goals, introduce and
              engage key team members, and establish communication rhythms.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Introduce the team and project structure</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Review existing system usage and pain points</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Agree on priorities for first iteration</span>
              </li>
            </ul>
          </div>
          <div className="bg-card border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileSearch className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Usage Review</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Before building, we study how staff actually use the current
              system to ensure we preserve what works.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>Walkthrough of existing OAS workflows</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>Identify MTE vs PSE differences</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>Document financial estimation rules</span>
              </li>
            </ul>
          </div>
        </div>

        {/* The iterative loop */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
          <h3 className="text-lg font-semibold mb-4 text-center">
            The Build & Iterate Loop
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center relative">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3">
                <Code2 className="h-7 w-7" />
              </div>
              <h4 className="font-semibold">Build</h4>
              <p className="text-sm text-muted-foreground">
                We develop a working feature or module
              </p>
              <ArrowRight className="hidden md:block absolute -right-2 top-8 h-5 w-5 text-muted-foreground" />
            </div>
            <div className="text-center relative">
              <div className="h-16 w-16 rounded-full bg-card border-2 border-primary flex items-center justify-center mx-auto mb-3">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h4 className="font-semibold">Demo</h4>
              <p className="text-sm text-muted-foreground">
                Show you working software, not just documents
              </p>
              <ArrowRight className="hidden md:block absolute -right-2 top-8 h-5 w-5 text-muted-foreground" />
            </div>
            <div className="text-center relative">
              <div className="h-16 w-16 rounded-full bg-card border-2 border-primary flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="h-7 w-7 text-primary" />
              </div>
              <h4 className="font-semibold">Feedback</h4>
              <p className="text-sm text-muted-foreground">
                You tell us what works and what needs adjustment
              </p>
              <ArrowRight className="hidden md:block absolute -right-2 top-8 h-5 w-5 text-muted-foreground" />
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-card border-2 border-primary flex items-center justify-center mx-auto mb-3">
                <Repeat className="h-7 w-7 text-primary" />
              </div>
              <h4 className="font-semibold">Refine</h4>
              <p className="text-sm text-muted-foreground">
                We incorporate feedback and repeat
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card border rounded-xl p-5">
          <p className="text-center text-muted-foreground">
            <span className="font-medium text-foreground">
              You see the working product early and often.
            </span>{" "}
            This approach reduces risk, allows course corrections, and ensures
            the final product meets your needs.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Multi-Program Complexity",
    subtitle: "MTE, PSE, and Program-Specific Requirements",
    content: (
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each funding program has distinct eligibility rules, application
            funnels, and financial estimation strategies. The rebuild will
            support this complexity while making it easier to manage.
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4 py-2 bg-card rounded-r-lg">
              <h3 className="font-semibold">Different Eligibility Rules</h3>
              <p className="text-sm text-muted-foreground">
                Each program has unique criteria—membership status, academic
                standing, institution type
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4 py-2 bg-card rounded-r-lg">
              <h3 className="font-semibold">
                Program-Specific Application Forms
              </h3>
              <p className="text-sm text-muted-foreground">
                Custom questionnaires, document requirements, and intake flows
                per program
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4 py-2 bg-card rounded-r-lg">
              <h3 className="font-semibold">Distinct Financial Estimation</h3>
              <p className="text-sm text-muted-foreground">
                Tuition, living allowances, books—calculated differently per
                program type
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4 py-2 bg-card rounded-r-lg">
              <h3 className="font-semibold">Separate Approval Workflows</h3>
              <p className="text-sm text-muted-foreground">
                Different review steps, disbursement rules, and advisor
                assignments
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Data-Driven Configuration
            </h3>
            <p className="text-muted-foreground mb-4">
              The new system will support program changes without code
              modifications:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>Enable/disable programs by schedule</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>Modify eligibility parameters</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>Update financial allocation rules</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>Customize application questionnaires</span>
              </li>
            </ul>
          </div>
          <div className="bg-card border rounded-xl p-5">
            <h4 className="font-medium mb-2">Year-Over-Year Tracking</h4>
            <p className="text-sm text-muted-foreground">
              Complex allocation rules change annually. The system maintains
              historical configurations for accurate reporting and forecasting
              across budget years.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Alberta Student Aid Alignment",
    subtitle: "Modern Experience Students Expect",
    content: (
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The rebuild will match the look, feel, and flow of Alberta Student
            Aid's online application system—providing the modern experience
            students have come to expect.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-card border rounded-lg">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Layers className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Step-by-Step Flow</h3>
                <p className="text-sm text-muted-foreground">
                  Clear progress indicators, save and resume, contextual help
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-card border rounded-lg">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <RefreshCw className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Mobile-First Design</h3>
                <p className="text-sm text-muted-foreground">
                  Majority of applicants complete on mobile—we design for that
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-card border rounded-lg">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">WCAG 2.1 AA Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  Accessible to all students, meeting government standards
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-card border rounded-xl p-5">
            <h4 className="font-semibold mb-3">Landing Page Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Staff-customizable content and announcements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Program availability and deadline visibility</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Important warnings and system status</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-5 border border-primary/20">
            <h4 className="font-semibold mb-3">Application Flow</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>OMSA / My Rupertsland Identity data prefill</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Document upload with progress indicators</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Real-time validation and inline help</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Integration & In-House Delivery",
    subtitle: "Built for Your Infrastructure and Team",
    content: (
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            Integration Expertise
          </h3>
          <div className="space-y-3">
            <div className="border rounded-lg p-4 bg-card">
              <h4 className="font-medium">KETO Synchronization</h4>
              <p className="text-sm text-muted-foreground">
                Bi-directional sync of tombstone and application data with
                conflict resolution and audit logging
              </p>
            </div>
            <div className="border rounded-lg p-4 bg-card">
              <h4 className="font-medium">OMSA / My Rupertsland Identity</h4>
              <p className="text-sm text-muted-foreground">
                Prefill eligible fields—identifiers, contact, membership—to
                reduce data entry
              </p>
            </div>
            <div className="border rounded-lg p-4 bg-card">
              <h4 className="font-medium">SQL Server 2022</h4>
              <p className="text-sm text-muted-foreground">
                Modern database with optimized queries, supporting your internal
                analytics needs
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            Maintainability Focus
          </h3>
          <div className="space-y-3">
            <div className="border rounded-lg p-4 bg-card">
              <h4 className="font-medium">Clean, Documented Codebase</h4>
              <p className="text-sm text-muted-foreground">
                Modern React + TypeScript stack with comprehensive documentation
                for your team
              </p>
            </div>
            <div className="border rounded-lg p-4 bg-card">
              <h4 className="font-medium">Containerized Deployment</h4>
              <p className="text-sm text-muted-foreground">
                Simplified hosting on RLI infrastructure with consistent
                environments
              </p>
            </div>
            <div className="border rounded-lg p-4 bg-card">
              <h4 className="font-medium">API-First Architecture</h4>
              <p className="text-sm text-muted-foreground">
                Separate frontend/backend for flexibility, easier testing, and
                future extensibility
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl p-5 border border-primary/20">
          <p className="text-center">
            <span className="font-medium">Our goal:</span> Deliver a system your
            team can confidently maintain, extend, and support long after the
            project concludes.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Proposed Timeline",
    subtitle: "December 2025 – September 2026",
    content: (
      <div className="space-y-6">
        <TooltipProvider>
          <div className="grid md:grid-cols-5 gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-primary text-primary-foreground rounded-xl p-4 text-center cursor-help">
                  <Calendar className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-xs uppercase tracking-wide opacity-80">
                    Dec 2025
                  </div>
                  <div className="font-semibold mt-1">Kick-Off</div>
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>
                  Align parties, introduce the team, review current system, and
                  establish communication rhythms for the project.
                </p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-card border rounded-xl p-4 text-center cursor-help">
                  <Calendar className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">
                    Jan–Feb 2026
                  </div>
                  <div className="font-semibold mt-1">Foundation</div>
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>
                  Set up technical infrastructure, establish integrations with
                  KETO/OMSA, and document existing workflows and business rules.
                </p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-card border rounded-xl p-4 text-center cursor-help">
                  <Calendar className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">
                    Feb-Mar 2026
                  </div>
                  <div className="font-semibold mt-1">Build & Iterate</div>
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>
                  Develop core features in sprints with regular demos, gather
                  feedback, and refine based on staff input.
                </p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-card border rounded-xl p-4 text-center cursor-help">
                  <Calendar className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">
                    Jun–Aug 2026
                  </div>
                  <div className="font-semibold mt-1">Polish & Deploy</div>
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>
                  Complete UAT, verify WCAG compliance, document and polish, and
                  align for production deployment.
                </p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-card border rounded-xl p-4 text-center cursor-help">
                  <Calendar className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">
                    2026 <ArrowRight className="h-4 w-4 inline-block" />
                  </div>
                  <div className="font-semibold mt-1">Transition & Support</div>
                </div>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>
                  Hand off to your team with comprehensive documentation,
                  provide ongoing support, and ensure smooth operation.
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-card border rounded-xl p-5">
            <h3 className="font-semibold mb-3">Kick-Off & Foundation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                Kick-off meeting with key team members
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                Review existing OAS usage and workflows
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                Establish technical foundation and integrations
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                First iteration planning (program priorities)
              </li>
            </ul>
          </div>
          <div className="bg-card border rounded-xl p-5">
            <h3 className="font-semibold mb-3">Build & Iterate Cycles</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                2-week sprints with working demos
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                Regular feedback sessions with staff
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                KETO/OMSA integration development
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                UAT, WCAG verification, staff training
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-5 border border-primary/20">
          <p className="text-center text-muted-foreground">
            <span className="font-medium text-foreground">
              Flexibility built in:
            </span>{" "}
            The iterative approach allows us to adjust priorities as we learn
            more about your needs throughout the project.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: 8,
    title: "Let's Get Started",
    subtitle: "Next Steps",
    content: (
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <p className="text-xl text-muted-foreground leading-relaxed">
          We're ready to begin the discovery phase and work alongside your team
          to build a platform that truly serves Rupertsland Institute's
          mission—one your team can maintain and extend for years to come.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border rounded-xl p-5 text-center">
            <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold mb-1">Award Contract</h3>
            <p className="text-sm text-muted-foreground">
              Finalize agreement and confirm start date
            </p>
          </div>
          <div className="bg-card border rounded-xl p-5 text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3 text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold mb-1">Kick-Off Meeting</h3>
            <p className="text-sm text-muted-foreground">
              Align on goals, meet the team, review current system
            </p>
          </div>
          <div className="bg-card border rounded-xl p-5 text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3 text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold mb-1">Start Building</h3>
            <p className="text-sm text-muted-foreground">
              First iteration begins with regular demo check-ins
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
          <p className="font-medium text-lg">
            Questions? We're happy to discuss any aspect of this proposal in
            detail.
          </p>
        </div>
      </div>
    ),
  },
];

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b px-6 py-4 flex items-center justify-between bg-card">
        <div className="text-sm text-muted-foreground">
          Slide {currentSlide + 1} of {slides.length}
        </div>
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="p-1 hover:opacity-80 transition-opacity"
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentSlide ? (
                <CheckCircle2 className="h-3 w-3 text-primary" />
              ) : (
                <Circle className="h-3 w-3 text-muted-foreground" />
              )}
            </button>
          ))}
        </div>
      </header>

      {/* Slide Content */}
      <main className="flex-1 p-6 md:p-12 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl text-muted-foreground mt-2">
              {slides[currentSlide].subtitle}
            </p>
          </div>
          <div className="mt-8">{slides[currentSlide].content}</div>
        </div>
      </main>

      {/* Navigation */}
      <footer className="border-t px-6 py-4 flex items-center justify-between bg-card">
        <Button
          variant="outline"
          onClick={goToPrevious}
          className="gap-2 bg-transparent"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <Button onClick={goToNext} className="gap-2">
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </footer>
    </div>
  );
}

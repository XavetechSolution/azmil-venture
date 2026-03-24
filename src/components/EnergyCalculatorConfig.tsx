"use client";

import useAppContext from "@/src/hooks/useAppContext";
import { Clock, Mail, Settings, User } from "lucide-react";
import { useState } from "react";

function EnergyCalculatorConfig() {
  const { state, dispatch } = useAppContext();

  interface ErrorState {
    name?: string;
    email?: string;
    systemType?: string;
    dailyUsage?: string;
  }

  const [errors, setErrors] = useState<ErrorState>({});

  const validateField = (field: string, value: string) => {
    let message = "";

    switch (field) {
      case "name":
        if (!value) message = "Name is required";
        break;

      case "email":
        if (!value) message = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value)) message = "Enter a valid email";
        break;

      case "systemType":
        if (!value) message = "Select a system type";
        break;

      case "dailyUsage":
        if (!value) message = "Enter hours used";
        else if (Number(value) <= 0) message = "Must be greater than 0";
        break;

      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [field]: message,
    }));
  };

  const handleUserChange = (field: "name" | "email", value: string) => {
    dispatch({ type: "SET_USER", payload: { [field]: value } });

    setErrors((prev: any) => ({ ...prev, [field]: "" }));
  };

  const handleSystemChange = (
    field: "systemType" | "dailyUsage",
    value: string,
  ) => {
    dispatch({ type: "SET_CONFIG", payload: { [field]: value } });

    setErrors((prev: any) => ({ ...prev, [field]: "" }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-center text-zinc-800">
        Energy System Configuration
      </h2>

      {/* USER INFO */}
      <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition space-y-4">
        <h3 className="text-lg font-semibold text-zinc-700 text-center">
          Your Details
        </h3>

        {/* NAME */}
        <div>
          <label className="text-sm font-medium text-zinc-600">Full Name</label>
          <div className="relative mt-1">
            <User className="absolute left-3 top-3 text-zinc-400" size={18} />
            <input
              type="text"
              placeholder="John Doe"
              value={state.user.name || ""}
              onChange={(e) => handleUserChange("name", e.target.value)}
              onBlur={(e) => validateField("name", e.target.value)}
              className={`w-full pl-10 pr-3 py-2 border rounded-xl outline-none transition
              ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-zinc-300 focus:ring-blue-500"
              } focus:ring-2`}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm font-medium text-zinc-600">
            Email Address
          </label>
          <div className="relative mt-1">
            <Mail className="absolute left-3 top-3 text-zinc-400" size={18} />
            <input
              type="email"
              placeholder="johndoe@email.com"
              value={state.user.email || ""}
              onChange={(e) => handleUserChange("email", e.target.value)}
              onBlur={(e) => validateField("email", e.target.value)}
              className={`w-full pl-10 pr-3 py-2 border rounded-xl outline-none transition
              ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-zinc-300 focus:ring-blue-500"
              } focus:ring-2`}
            />
          </div>
          <p className="text-xs text-zinc-500 mt-1">
            We’ll send your report to this email
          </p>
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
        </div>
      </div>

      {/* SYSTEM CONFIG */}
      <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition space-y-4">
        <h3 className="text-lg font-semibold text-zinc-700 text-center">
          System Settings
        </h3>

        {/* SYSTEM TYPE */}
        <div>
          <label className="text-sm font-medium text-zinc-600">
            System Type
          </label>
          <div className="relative mt-1">
            <Settings
              className="absolute left-3 top-3 text-zinc-400"
              size={18}
            />
            <select
              value={state.config.systemType || ""}
              onChange={(e) => handleSystemChange("systemType", e.target.value)}
              onBlur={(e) => validateField("systemType", e.target.value)}
              className={`w-full pl-10 pr-3 py-2 border rounded-xl bg-white outline-none transition
              ${
                errors.systemType
                  ? "border-red-500 focus:ring-red-500"
                  : "border-zinc-300 focus:ring-blue-500"
              } focus:ring-2`}
            >
              <option value="">Select system type</option>
              <option value="ongrid">On-Grid</option>
              <option value="offgrid">Off-Grid</option>
            </select>
          </div>
          {errors.systemType && (
            <p className="text-red-500 text-xs mt-1">{errors.systemType}</p>
          )}
        </div>

        {/* HOURS */}
        <div>
          <label className="text-sm font-medium text-zinc-600">
            Hours Used Per Day
          </label>
          <div className="relative mt-1">
            <Clock className="absolute left-3 top-3 text-zinc-400" size={18} />
            <input
              type="number"
              placeholder="e.g. 5"
              value={state.config.dailyUsage || ""}
              onChange={(e) => handleSystemChange("dailyUsage", e.target.value)}
              onBlur={(e) => validateField("dailyUsage", e.target.value)}
              className={`w-full pl-10 pr-3 py-2 border rounded-xl outline-none transition
              ${
                errors.dailyUsage
                  ? "border-red-500 focus:ring-red-500"
                  : "border-zinc-300 focus:ring-blue-500"
              } focus:ring-2`}
            />
          </div>
          <p className="text-xs text-zinc-500 mt-1">Average daily usage time</p>
          {errors.dailyUsage && (
            <p className="text-red-500 text-xs">{errors.dailyUsage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default EnergyCalculatorConfig;

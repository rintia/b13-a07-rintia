"use client";

import { SummaryContext } from "@/context/SummaryContext";
import { useContext } from "react";
import toast from "react-hot-toast";

const actionConfig = [
  { label: "Call",  icon: "📞", toastMsg: (name) => `📞 Calling ${name}...`,  toastStyle: { background: "#dbeafe", color: "#1e40af" } },
  { label: "Text",  icon: "💬", toastMsg: (name) => `💬 Text sent to ${name}`, toastStyle: { background: "#dcfce7", color: "#166534" } },
  { label: "Video", icon: "🎥", toastMsg: (name) => `🎥 Video call with ${name} started`, toastStyle: { background: "#fef9c3", color: "#854d0e" } },
];

const ButtonAction = ({ friendName }) => {
  const { setSummary } = useContext(SummaryContext);

  const handleOnClick = (action) => {
    // Save to context
    setSummary((prev) => [
      ...prev,
      { friendName, action: action.label, date: new Date().toISOString() },
    ]);

    // Show toast
    toast(action.toastMsg(friendName), {
      style: action.toastStyle,
      duration: 3000,
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
      <p className="font-semibold text-gray-900 text-base mb-4">Quick Check-In</p>
      <div className="grid grid-cols-3 gap-3">
        {actionConfig.map((action, i) => (
          <button
            key={i}
            onClick={() => handleOnClick(action)}
            className="bg-gray-50 border border-gray-200 rounded-xl py-5 flex flex-col items-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <span className="text-2xl">{action.icon}</span>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonAction;
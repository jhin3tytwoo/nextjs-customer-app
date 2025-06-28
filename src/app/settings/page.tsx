"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@company.com",
    role: "Sales Manager",
    avatar: "JD",
  });

  const [preferences, setPreferences] = useState({
    notifications: true,
    emailAlerts: false,
    darkMode: false,
  });

  const [security, setSecurity] = useState({
    twoFactor: true,
    sessionTimeout: "30",
  });

  const handleToggle = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => console.log("Settings saved");

  const navItems = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "preferences", label: "Preferences", icon: "⚙️" },
    { id: "security", label: "Security", icon: "🔒" },
    { id: "billing", label: "Billing", icon: "💳" },
  ];

  const preferenceItems = [
    {
      key: "notifications",
      label: "Push Notifications",
      desc: "Receive notifications about important updates",
    },
    {
      key: "emailAlerts",
      label: "Email Alerts",
      desc: "Get email notifications for new customers",
    },
    {
      key: "darkMode",
      label: "Dark Mode",
      desc: "Use dark theme across the application",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className=" mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your preferences and security</p>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          <nav className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button className="w-full text-left px-4 py-3 flex items-center gap-3 rounded-xl text-gray-700 hover:bg-gray-50">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2 space-y-8">
            {/* Profile Section */}
            <section className="p-6 bg-white rounded-2xl shadow-sm border">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                👤 Profile Information
              </h2>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {profile.avatar}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{profile.name}</h3>
                  <p className="text-gray-600">{profile.role}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {["name", "email"].map((key) => (
                  <div key={key}>
                    <label className="block text-sm font-medium mb-2 capitalize">
                      {key === "name" ? "Full Name" : "Email Address"}
                    </label>
                    <input
                      type={key === "email" ? "email" : "text"}
                      value={profile[key as "name" | "email"]}
                      onChange={(e) =>
                        setProfile({ ...profile, [key]: e.target.value })
                      }
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Preferences Section */}
            <section className="p-6 bg-white rounded-2xl shadow-sm border">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                ⚙️ Preferences
              </h2>
              <div className="space-y-6">
                {preferenceItems.map((p) => (
                  <div
                    key={p.key}
                    className="flex items-center justify-between py-3 border-b"
                  >
                    <div>
                      <h3 className="font-medium">{p.label}</h3>
                      <p className="text-sm text-gray-600">{p.desc}</p>
                    </div>
                    <button
                      onClick={() => handleToggle(p.key as any)}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        preferences[p.key as keyof typeof preferences]
                          ? "bg-blue-600"
                          : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                          preferences[p.key as keyof typeof preferences]
                            ? "translate-x-6"
                            : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Security Section */}
            <section className="p-6 bg-white rounded-2xl shadow-sm border">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                🔒 Security Settings
              </h2>

              <div className="flex items-center justify-between py-3 border-b">
                <div>
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-600">
                    Add extra layer of protection
                  </p>
                </div>
                <button
                  onClick={() =>
                    setSecurity((prev) => ({
                      ...prev,
                      twoFactor: !prev.twoFactor,
                    }))
                  }
                  className={`relative w-12 h-6 rounded-full ${
                    security.twoFactor ? "bg-green-600" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      security.twoFactor ? "translate-x-6" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium mb-2">
                  Session Timeout
                </label>
                <select
                  value={security.sessionTimeout}
                  onChange={(e) =>
                    setSecurity({ ...security, sessionTimeout: e.target.value })
                  }
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                >
                  {["15", "30", "60", "120"].map((min) => (
                    <option key={min} value={min}>
                      {min === "60"
                        ? "1 hour"
                        : min === "120"
                        ? "2 hours"
                        : `${min} minutes`}
                    </option>
                  ))}
                </select>
              </div>

              <button className="w-full mt-6 py-3 bg-red-50 text-red-700 rounded-xl hover:bg-red-100 font-medium">
                Change Password
              </button>
            </section>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4">
              <button className="px-6 py-3 border rounded-xl hover:bg-gray-50 text-gray-700">
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

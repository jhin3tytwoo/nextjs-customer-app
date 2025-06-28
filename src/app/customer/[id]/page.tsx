// src/app/customer/[id]/page.tsx
"use client";
const mockDetailData = Array.from({ length: 10 }, (_, i) => {
  const id = (175312 + i).toString();
  return {
    customer_id: id,
    opportunity: {
      customer_id: id,
      type_install: "Roof Repair",
      current_checklist: ["Calendar", "Email Sent", "GIS", "Roofscope"],
      status: i % 2 === 0 ? "Initial" : "Lead",
    },
    lead_sources: [
      {
        lead_source_id: "250",
        source_name: "Treehouse - Organic (CT/RI)",
      },
    ],
    contact: {
      first_name: `Contact${i}`,
      last_name: `Person${i}`,
      email_primary: `contact${i}@mail.com`,
      phone_primary: `(860) 462-60${70 + i}`,
      is_primary: true,
    },
    address: [
      {
        street: `${i + 1} Main St`,
        city: "Wethersfield",
        state: "CT",
        zip: "06109",
      },
    ],
    sales: [
      {
        emp_id: "999",
        emp_name: `Sales Rep ${i}`,
      },
    ],
    notes: [
      {
        created_by: "",
        note: `Note ${i} - scheduling info`,
        hyperlink: "",
        type_interaction_id: "99",
        type_interaction: "Auto Log",
        file: "",
        created_timestamp: `2019-01-${21 + i}T06:00:00.000`,
        modified_timestamp: null,
      },
    ],
    progress_status: [
      {
        status: "Scheduled",
        activity_date: "2020-08-02",
      },
      {
        status: "Run",
        activity_date: "2017-01-05",
      },
    ],
    documents: [
      {
        document_id: `12436${i}`,
        opportunity_id: "124024",
        estimate_id: "104088",
        file_url: `example.com/123-${i}.pdf`,
        file_type: "pdf",
        created_timestamp: "",
        modified_timestamp: "",
      },
    ],
  };
});

import { use } from "react";

export default function CustomerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const unwrappedParams = use(params);
  const data = mockDetailData.find((d) => d.customer_id === unwrappedParams.id);

  if (!data)
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Customer Not Found
          </h2>
          <p className="text-gray-600">
            The customer data you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Lead":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Initial":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case "Scheduled":
        return "bg-orange-100 text-orange-800";
      case "Run":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => window.history.back()}
              className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">
                Customer Details
              </h1>
              <p className="text-gray-600">ID: {unwrappedParams.id}</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Opportunity */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Opportunity
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Type
                  </label>
                  <p className="text-gray-900 font-medium">
                    {data.opportunity.type_install}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Status
                  </label>
                  <div className="mt-1">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                        data.opportunity.status
                      )}`}
                    >
                      {data.opportunity.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium text-gray-500">
                  Checklist Progress
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {data.opportunity.current_checklist.map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-green-100 text-green-800"
                    >
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Notes</h2>
              </div>

              <div className="space-y-4">
                {data.notes.map((note, i) => (
                  <div
                    key={i}
                    className="p-4 bg-gray-50 rounded-xl border border-gray-100"
                  >
                    <p className="text-gray-900 mb-2">{note.note}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-200 text-gray-700">
                        {note.type_interaction}
                      </span>
                      <span>
                        {new Date(note.created_timestamp).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Documents
                </h2>
              </div>

              <div className="space-y-3">
                {data.documents.map((doc, i) => (
                  <a
                    key={i}
                    href={`https://${doc.file_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 group-hover:text-blue-600">
                        {doc.file_type.toUpperCase()} Document
                      </p>
                      <p className="text-sm text-gray-500">{doc.file_url}</p>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact & Info */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
              </div>

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mx-auto mb-3">
                  {data.contact.first_name[0]}
                  {data.contact.last_name[0]}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {data.contact.first_name} {data.contact.last_name}
                </h3>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-1">
                  Primary Contact
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900">
                      {data.contact.email_primary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-900">
                      {data.contact.phone_primary}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Address</h2>
              </div>

              {data.address.map((addr, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-gray-900 font-medium">{addr.street}</p>
                  <p className="text-gray-600">
                    {addr.city}, {addr.state} {addr.zip}
                  </p>
                </div>
              ))}
            </div>

            {/* Progress Status */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Progress
                </h2>
              </div>

              <div className="space-y-3">
                {data.progress_status.map((progress, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl border border-gray-100"
                  >
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getProgressColor(
                        progress.status
                      )}`}
                    >
                      {progress.status}
                    </span>
                    <span className="text-sm text-gray-500">
                      {progress.activity_date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sales Rep */}
            {data.sales.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 112 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Sales Rep
                  </h2>
                </div>

                {data.sales.map((sales, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-800 font-semibold text-sm">
                      {sales.emp_name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {sales.emp_name}
                      </p>
                      <p className="text-sm text-gray-500">
                        ID: {sales.emp_id}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

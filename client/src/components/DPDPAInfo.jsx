import React from 'react';
import { motion } from 'framer-motion';

const DPDPAInfo = () => {
  return (
    <div className="mx-auto p-10 bg-white rounded-lg shadow-lg pt-11 top-11 relative">
      <motion.h2
        className="text-4xl font-semibold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Key Provisions of the Digital Personal Data Protection Act (DPDPA) 2023
      </motion.h2>
      <motion.p
        className="text-lg text-gray-700 mb-6 leading-relaxed"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        The Digital Personal Data Protection Act (DPDPA) 2023 in India lays down comprehensive guidelines for the handling of Personal Data, including Personally Identifiable Information (PII). Here’s a summary of the key provisions related to PII:
      </motion.p>
      <ol className="list-decimal pl-5 space-y-6">
        {[
          {
            title: "Consent and Purpose Limitation",
            points: [
              "Processing of personal data must be done with the explicit consent of the Data Principal. The consent should be informed, specific, and obtained in clear and plain language.",
              "Personal data can only be processed for the specific, lawful purposes for which it was collected. Data Fiduciaries cannot process data beyond what is necessary for the intended purpose."
            ],
          },
          {
            title: "Data Protection by Design and Default",
            points: [
              "Data Fiduciaries are required to implement organizational and technical measures to ensure that data protection principles are embedded in the design of their systems and processes. By default, only the necessary data should be processed."
            ],
          },
          {
            title: "Security Safeguards",
            points: [
              "Adequate security measures must be taken to protect personal data from unauthorized access, disclosure, alteration, or destruction. This includes encryption, access controls, and regular security audits."
            ],
          },
          {
            title: "Data Principal Rights",
            points: [
              "Data Principals have the right to know what personal data is being collected and processed.",
              "Individuals can request the correction or deletion of inaccurate or outdated personal data.",
              "Data Principals can request a copy of their personal data in a structured, commonly used format.",
              "Data Principals can withdraw their consent at any time, and the Data Fiduciary must stop processing the data unless there is a legal basis to continue."
            ],
          },
          {
            title: "Breach Notification",
            points: [
              "In the event of a data breach, Data Fiduciaries are required to notify the Data Principal and the Data Protection Board of India. The notification should include details of the breach, the potential impact, and the remedial actions taken."
            ],
          }
        ].map(({ title, points }, index) => (
          <motion.li
            key={index}
            className="text-lg text-gray-800 transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          >
            <strong className="text-xl text-gray-900">{title}:</strong>
            <ul className="list-disc pl-5 mt-2">
              {points.map((point, idx) => (
                <motion.li
                  key={idx}
                  className="text-lg text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index + idx) * 0.1 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </div>
  );
};

export default DPDPAInfo;

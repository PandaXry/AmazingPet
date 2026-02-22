import React from 'react';
import { ShieldCheck } from '@phosphor-icons/react';

export const ComplianceBanner = () => {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8" data-testid="compliance-banner">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <ShieldCheck size={32} className="text-slate-900" weight="duotone" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-slate-900 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Observation Tool, Not Diagnostic
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Amazing Pet Air is a <strong>pre-check and observation tool</strong>, not a diagnostic or treatment device. 
            Results are for monitoring and reference purposes only and should not replace veterinary consultation.
          </p>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li className="flex items-start">
              <span className="text-slate-900 mr-2">•</span>
              <span>AI-assisted observation with image traceability</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-900 mr-2">•</span>
              <span>Optional manual review for additional verification</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-900 mr-2">•</span>
              <span>Results should inform decision to seek veterinary or lab testing</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ApplyRedirect() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const referrer = document.referrer;
    const utm_source = searchParams.get('utm_source');
    const utm_medium = searchParams.get('utm_medium');
    const utm_campaign = searchParams.get('utm_campaign');

    fetch('/api/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        referrer,
        utm_source,
        utm_medium,
        utm_campaign,
        timestamp: new Date().toISOString(),
      }),
    }).catch((err) => console.error('Failed to log:', err))
      .finally(() => {
        setTimeout(() => {
          window.location.href =
            'https://nexyouth.org/';
        }, 300);
      });
  }, [searchParams]);

  return <p>Redirecting you home...</p>;
}

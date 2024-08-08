'use client';

import type { WidgetConfig } from '@lifi/widget';
import { azureLightTheme, LiFiWidget } from '@lifi/widget';
import { useMemo, useEffect, useState } from 'react';

import MainLayout from '@/layouts/MainLayout/MainLayout';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const widgetConfig: WidgetConfig = useMemo(
    () => ({
      theme: azureLightTheme,
      integrator: 'OpenSea',
    }),
    []
  );

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <MainLayout>
      <LiFiWidget integrator="myswap" config={widgetConfig} />
    </MainLayout>
  );
}

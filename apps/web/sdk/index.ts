import { initSDK, buildModule } from '@vue-storefront/sdk';
import { type SdkModule, sdkModule } from '@vue-storefront/storefront-boilerplate-sdk';
import { type EmporixSdkModule, emporixSdkModule } from '@medienwerft/emporix-sdk';
import { createSharedComposable } from '@vueuse/core';

export const useSdk = createSharedComposable(() => {
  const sdkConfig = {
    commerce: buildModule<SdkModule>(sdkModule),
    emporix: buildModule<EmporixSdkModule>(emporixSdkModule, {
      apiUrl: 'http://localhost:8181/emporix',
    }),
  };

  return initSDK<typeof sdkConfig>(sdkConfig);
});

import { useCallback } from 'react';

import { useFetch } from '@/hooks/useFetch';

export interface GetModelsRequestProps {
  apiType: string,
  apiKey: string,
  endPointUrl: string
}

const useApiService = () => {
  const fetchService = useFetch();

  const getModels = useCallback(
    (params: GetModelsRequestProps, signal?: AbortSignal) => {
      return fetchService.post<GetModelsRequestProps>(`/api/models`, {
        body: { apiType: params.apiType, apiKey: params.apiKey, endPointUrl: params.endPointUrl },
        headers: {
          'Content-Type': 'application/json',
        },
        signal,
      });
    },
    [fetchService],
  );

  return {
    getModels,
  };
};

export default useApiService;

import { createContext, useContext, useState } from 'react';

type MainTrendsProviderValueProps = {
  mainTrends: string[] | null;
  setMainTrends: (mainTrends: string[] | null) => void;
}

export const MainTrendsContext = createContext<MainTrendsProviderValueProps>(
  { mainTrends: [], setMainTrends: () => {} },
);

const MainTrendsProvider = ({ children }: {children: any}) => {
  const [mainTrends, setMainTrends] = useState<string[] | null>([]);
  return (
    <MainTrendsContext.Provider value={{ mainTrends, setMainTrends }}>
      {children}
    </MainTrendsContext.Provider>
  );
};

export const useMainTrends = (): MainTrendsProviderValueProps => {
  const context = useContext(MainTrendsContext);
  if (!context) throw new Error('useMainTrends must be used within a MainTrendsProvider');
  const { mainTrends, setMainTrends } = context;
  return { mainTrends, setMainTrends };
};

export default MainTrendsProvider;

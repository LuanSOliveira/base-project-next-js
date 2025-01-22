'use client';

import DefaultFormButton from '@/shared/components/buttons/defaultFormButton';
import TestesSections from '../TestesSections';
import { useRouter } from 'next/navigation';

const TesteRouterSection = () => {
  const router = useRouter();
  return (
    <TestesSections title="Navegar para outras rotas de testes">
      <div className="flex gap-2">
        <DefaultFormButton
          description="Forms"
          variant="contained"
          onClick={() => router.push('testes/forms')}
        />
      </div>
    </TestesSections>
  );
};

export default TesteRouterSection;

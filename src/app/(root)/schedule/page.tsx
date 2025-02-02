'use client'

import LoaderUI from '@/components/LoaderUI';
import { useUserRole } from '@/hooks/useUserRole';
import { useRouter, redirect } from 'next/navigation';
import React from 'react';
import InterviewScheduleUI from './InterviewScheduleUI';

const schedulepage = () => {
  const router = useRouter();
  const { isInterviewer, isLoading } = useUserRole();

  if (isLoading) return <LoaderUI />;
  if (!isInterviewer) redirect('/');

  return (
    <InterviewScheduleUI />
  );
};

export default schedulepage;
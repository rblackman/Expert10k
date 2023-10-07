'use client';

import { ReactNode } from 'react';
import { MutableSnapshot, RecoilRoot } from 'recoil';

interface HomepageProps {
	children: ReactNode;
}

export default function HomepageRecoilRoot({ children }: HomepageProps) {
	function initializeState({ set }: MutableSnapshot) {
	}

	return <RecoilRoot initializeState={initializeState}>{children}</RecoilRoot>;
}

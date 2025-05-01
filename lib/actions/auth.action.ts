'user server';

import { db } from '@/components/firebase/admin';

export async function signUp(params: SignUpParams) {
  const { uid, name, email } = params;

  try {
    const userRecord = await db.collection('users').doc(uid).get();
  } catch (e: any) {
    console.error('Error creating a user', e);

    if (e.code === 'auth/email-already-exists') {
      return {
        success: false,
        message: 'This email already in use.',
      };
    }

    return {
      success: false,
      message: 'Failed to create and account.',
    };
  }
}

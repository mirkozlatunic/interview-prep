'user server';

export async function signUp(params: SignUpParams) {
  const { uid, name, email } = params;

  try {
  } catch (error) {
    console.error('Error creating a user', error);
  }
}

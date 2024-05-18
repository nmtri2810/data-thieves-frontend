import React from 'react';
import Auth from '@/pages/auth';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupSchema } from '@/validations/auth';
// import { useAppDispatch } from '@/store/hooks';
import { Button } from '@/components/ui/button';

const SignUp: React.FC = () => {
  // const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
      username: ''
    }
  });

  function onSubmit(data: z.infer<typeof SignupSchema>) {
    console.log('src_pages_auth_signup.tsx#21: ', data);
    // dispatch(registerRequest(data));
  }

  return (
    <Auth
      isLogin={false}
      title='Create your account'
      description='Create your account to join MathU community'
      cardClassName='min-w-[500px]'
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='p-6 pt-0 grid gap-4 min-w-'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter email'
                    type='email'
                    errorMsg={form.formState.errors.email?.message}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter password'
                    type='password'
                    errorMsg={form.formState.errors.password?.message}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='passwordConfirmation'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password confirmation</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter password confirmation'
                    type='password'
                    errorMsg={form.formState.errors.passwordConfirmation?.message}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password confirmation</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter Username'
                    type='text'
                    errorMsg={form.formState.errors.username?.message}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='mt-4' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </Auth>
  );
};

export default SignUp;

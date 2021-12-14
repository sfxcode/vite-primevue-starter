<template>
  <div class='tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-py-12 tw-px-4 tw-sm:px-6 tw-lg:px-8'>
    <div class='tw-max-w-md tw-w-full tw-space-y-8'>
      <div>
        <img class='tw-mx-auto tw-h-12 tw-w-auto' src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
             alt='Workflow' />
        <h2 class='tw-mt-6 ttw-ext-center tw-text-3xl tw-font-extrabold'>
          Sign in to Administration area
        </h2>
        <p class='tw-mt-2 tw-text-center tw-text-sm'>
          Use: 1234 ;-)
        </p>
        <p v-if='errorMessage.length > 0' class='tw-mt-2 tw-text-center vtext-sm tw-text-red-600'>
          Login Error - Try again
        </p>
      </div>
      <form class='tw-mt-8 tw-space-y-6' action='#' method='POST'>
        <input type='hidden' name='remember' value='true' />
        <div class='tw-rounded-md tw-shadow-sm tw--space-y-px'>
          <div class='mb-2'>
            <label for='email-address' class='tw-sr-only'>Email address</label>
            <InputText id='email-address' v-model='auth.email' name='email' type='email' autocomplete='email' required=''
                   class='tw-appearance-none tw-rounded-none tw-relative tw-block tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-placeholder-gray-500 tw-text-gray-900 tw-rounded-t-md tw-focus:outline-none tw-focus:ring-indigo-500 tw-focus:border-indigo-500 tw-focus:z-10 tw-sm:text-sm'
                   placeholder='Email address' />
          </div>
          <div>
            <label for='password' class='tw-sr-only'>Password</label>
            <InputText id='password' v-model='password' name='password' type='password' autocomplete='current-password'
                   required=''
                   class='tw-appearance-none tw-rounded-none tw-relative tw-block tw-w-full tw-px-3 tw-py-2tw-border tw-border-gray-300 tw-placeholder-gray-500 tw-text-gray-900 tw-rounded-b-md tw-focus:outline-none tw-focus:ring-indigo-500 tw-focus:border-indigo-500 tw-focus:z-10 tw-sm:text-sm'
                   placeholder='Password' />
          </div>
        </div>

        <div class='tw-flex tw-items-center tw-justify-between'>
          <div class='tw-flex tw-items-center'>
            <input id='remember-me' name='remember-me' type='checkbox'
                   class='tw-h-4 tw-w-4 tw-text-indigo-600 tw-focus:ring-indigo-500 tw-border-gray-300 tw-rounded' />
            <label for='remember-me' class='tw-ml-2 tw-block tw-text-sm'>
              Remember me
            </label>
          </div>

          <div class='text-sm'>
            <a href='#' class='font-medium hover:text-indigo-500'>
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <Button @click='login'
                  class='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
            <span class='absolute left-0 inset-y-0 flex items-center pl-3'>
              <LockClosedIcon class='h-5 w-5 text-indigo-500 group-hover:text-indigo-400' aria-hidden='true' />
            </span>
            Sign in
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useAuthStore } from '@/store';
import { useRouter } from 'vue-router';
import Input from '../../dist/elements/input.html';

const auth = useAuthStore();

const router = useRouter();

const password = ref('');
const errorMessage = ref('');

function login() {
  auth.login(password.value);
  if (auth.authentificated) {
    password.value = '';
    errorMessage.value = '';
    router.push('/admin');
  } else {
    password.value = '';
    errorMessage.value = 'Login Error - Try again';
  }
}

</script>

<style scoped></style>

import React from 'react';
import "react-native-url-polyfill/auto";
// import  AsyncStorage  from 'react-native-async-storage/async-storage';
import {createClient} from "@supabase/supabase-js";

//link to db base url
const supabaseUrl ="https://oeefvuvmgvxefddmkbve.supabase.co"
//link to anon key
const supabaseAnonKey = 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lZWZ2dXZtZ3Z4ZWZkZG1rYnZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2NzQ2ODYsImV4cCI6MjA0NzI1MDY4Nn0.yR0ptAT63PEetYi7TztPovajfq-eQfzDcu6bKsv_DxU"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth:{
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

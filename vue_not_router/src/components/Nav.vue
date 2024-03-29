<template>
  <nav class="nav">
    <!-- <router-link to="/">Overview</router-link> -->
    <!-- <router-link to="/transaction">Transactions</router-link> -->
    <router-link :to="{ name: 'transaction-route' }">Transactions</router-link>
    <!-- <router-link to="/">Budgets</router-link> -->
    <!-- <router-link to="/">Report</router-link> -->
    <!-- <router-link to="/">Settings</router-link> -->
  </nav>
</template>

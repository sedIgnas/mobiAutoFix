<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
    <b-container>
      <b-navbar-brand to="/">MobiAutoFix</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <li class="nav-item">
                <router-link class="nav-link" to="/jobs">
                    All Jobs
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/create-job">
                    Create Job
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/vehicles">
                    Vehicles
                </router-link>
            </li>
            <li class="d-inline-block float-right">
                <a href="http://127.0.0.1:8000/login" class="nav-link">Log in</a>
            </li>
            <li class="d-inline-block nav-item float-right">
                    <a href="http://127.0.0.1:8000/admin" class="nav-link">Admin panel</a>
            </li>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

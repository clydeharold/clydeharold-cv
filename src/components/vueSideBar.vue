<template>
  <nav id="sidebar" class="">
        <div class="sidebar-header"> 
            <strong>CH</strong>
            <span class="d-none d-lg-block">
                <img src="../assets/images/clydepic.png" alt="clydeharold" class="img-fluid img-profile rounded-circle mx-auto mb-2">
            </span>
            <h3>@clydeharold</h3>
        </div>
        <ul class="list-unstyled components">
            <router-link to='/' tag="li" active-class="active" exact>
                <a>
                <i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp;Home
                </a>
            </router-link>
            <router-link to='/About' tag="li" active-class="active">
                <a>
                    <i class="fa fa-user" aria-hidden="true"></i>&nbsp;About
                </a>   
            </router-link>
            <router-link to="/Education" tag="li" active-class="active">
                <a>
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>&nbsp;Education
                </a>
            </router-link>
            <li>
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i class="fa fa-wrench" aria-hidden="true"></i>
                    Experiences
                </a>
            </li>
            
            <ul class="collapse list-unstyled" id="homeSubmenu">
                <router-link to='/Work' tag="li" active-class="active">
                    <a>
                        <i class="fa fa-briefcase" aria-hidden="true"></i>&nbsp;Work
                    </a> 
                </router-link>
                <router-link to='/Training' tag="li" active-class="active">
                    <a>
                        <i class="fa fa-certificate" aria-hidden="true"></i>&nbsp;Training
                    </a>
                </router-link>
                <router-link to='/Seminar' tag="li" active-class="active">
                    <a>
                        <i class="fa fa-address-card-o" aria-hidden="true"></i>&nbsp;Seminar
                    </a>
                </router-link>    
            </ul>
        </ul>
    </nav>
</template>

<style>
h3 {
    text-align:center;
}
ul ul a {
    background-color:#17a2b8 !important;
}
ul ul a:hover {
    background-color:white;
}
</style>

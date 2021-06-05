<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="https://laravel.com/" class="brand-link">
        <span class="brand-text font-weight-light">@lang('Control panel')</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="info">
            <span class="text-light" class="h5">Logged in as: </span>
                <a href="#" class="d-block">{{Auth::user() ? Auth::user()->getFullNameAttribute() : ''}}</a>
            </div>
        </div>
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                     with font-awesome or any other icon font library -->
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                            @lang('Vehicles')
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{route('admin.vehicles.index')}}" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>@lang('All Vehicles')</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{route('admin.make.index')}}" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>@lang('Manufacturers only')</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{route('admin.vehiclemodel.index')}}" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>@lang('Models only')</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="{{route('admin.users.index')}}" class="nav-link">
                        <i class="nav-icon fas fa-user"></i>
                        <p>
                            @lang('Users')
                        </p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{route('admin.jobs.index')}}" class="nav-link">
                        <i class="nav-icon fas fa-briefcase"></i>
                        <p>
                            @lang('Jobs')
                        </p>
                    </a>
                </li>
                <!-- logout --><li class="nav-item">
                    <form id="logout" action="{{ route('logout') }}" method="POST"
                          style="display: none;">
                        @csrf
                    </form>
                    <a href="#logout" onclick="event.preventDefault();document.getElementById('logout').submit()" class="nav-link">
                        <i class="nav-icon fas fa-sign-out-alt"></i>
                        <p>
                            @lang('Log out')
                        </p>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>

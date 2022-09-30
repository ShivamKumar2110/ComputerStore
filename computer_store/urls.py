from django.conf.urls import url
from . import views
 
urlpatterns=[
	url(r'^home/', views.index,name='index'),
	url(r'^login/',views.login,name='login'),
	url(r'^registration/',views.registration,name='registration'),
	url(r'^data/$', views.data, name='data'),
	url(r'^get_data/$', views.get_data, name='get_data'),
	url(r'^dash/$',views.dash,name='dashboard'),
	url(r'^logout/$',views.logout,name='dashboard'),
	url(r'^edit/$',views.edit,name='profile_edit'),
	url(r'^comp/$',views.order_comp,name='order_comp'),
	url(r'^soft/$',views.order_soft,name='order_soft'),
	url(r'^rep/$',views.order_rep,name='order_rep'),



	url(r'^dell_desk_game/$',       views.dell_desk_game,name='order_dell1'),
	url(r'^dell_desk_office/$',     views.dell_desk_office,name='order_dell1'),
	url(r'^dell_lap_game/$',        views.dell_lap_game,name='order_dell1'),
	url(r'^dell_lap_office/$',      views.dell_lap_office,name='order_dell1'),
	url(r'^lenovo_desk_game/$',     views.lenovo_desk_game,name='order_dell1'),
	url(r'^lenovo_desk_office/$',   views.lenovo_desk_office,name='order_dell1'),
	url(r'^lenovo_lap_game/$',      views.lenovo_lap_game,name='order_dell1'),
	url(r'^lenovo_lap_office/$',    views.lenovo_lap_office,name='order_dell1'),


	url(r'^security/$',     views.security,name='order_dell1'),
	url(r'^utility/$',   views.utility,name='order_dell1'),
	url(r'^media/$',      views.media,name='order_dell1'),
	url(r'^study/$',    views.study,name='order_dell1'),	



	url(r'^dell_bat/$',       views.dell_bat,name='order_dell1'),
	url(r'^dell_key/$',     views.dell_key,name='order_dell1'),
	url(r'^dell_mouse/$',        views.dell_mouse,name='order_dell1'),
	url(r'^dell_scr/$',      views.dell_scr,name='order_dell1'),
	url(r'^lenovo_scr/$',     views.lenovo_scr,name='order_dell1'),
	url(r'^lenovo_bat/$',   views.lenovo_bat,name='order_dell1'),
	url(r'^lenovo_key/$',      views.lenovo_key,name='order_dell1'),
	url(r'^lenovo_mouse/$',    views.lenovo_mouse,name='order_dell1'),



	url(r'^edit_data/$',views.edit_data,name='edit_data')
]
 
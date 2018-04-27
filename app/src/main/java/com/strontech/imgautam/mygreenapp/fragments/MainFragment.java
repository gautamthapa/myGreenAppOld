package com.strontech.imgautam.mygreenapp.fragments;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentTransaction;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.ViewGroup;

import android.widget.LinearLayout;
import com.strontech.imgautam.mygreenapp.R;
import com.strontech.imgautam.mygreenapp.calendarfragments.CalendarMainFragment;
import com.strontech.imgautam.mygreenapp.contentfragments.ContentMainFragment;
import com.strontech.imgautam.mygreenapp.infofragments.InfoMainFragment;
import com.strontech.imgautam.mygreenapp.newsfragments.NewsMainFragment;

/**
 * A simple {@link Fragment} subclass.
 */
public class MainFragment extends Fragment implements OnClickListener{

  private LinearLayout linearLayoutNews;
  private LinearLayout linearLayoutContents;
  private LinearLayout linearLayoutCalendar;
  private LinearLayout linearLayoutInfo;
  private View view;
  public MainFragment() {
    // Required empty public constructor
  }


  @Override
  public View onCreateView(LayoutInflater inflater, ViewGroup container,
      Bundle savedInstanceState) {
    // Inflate the layout for this fragment
    view= inflater.inflate(R.layout.fragment_main, container, false);

    initViews();
    initListeners();
    initObjects();
    return view;
  }


  private void initViews() {
    linearLayoutNews=view.findViewById(R.id.linearLayoutNews);
    linearLayoutContents=view.findViewById(R.id.linearLayoutContents);
    linearLayoutCalendar=view.findViewById(R.id.linearLayoutCalendar);
    linearLayoutInfo=view.findViewById(R.id.linearLayoutInfo);
  }


  private void initListeners() {

    linearLayoutNews.setOnClickListener(this);
    linearLayoutContents.setOnClickListener(this);
    linearLayoutCalendar.setOnClickListener(this);
    linearLayoutInfo.setOnClickListener(this);

  }

  private void initObjects() {

  }

  @Override
  public void onClick(View v) {
    switch (v.getId()){
      case R.id.linearLayoutNews:
        FragmentTransaction ft=getFragmentManager().beginTransaction();
        ft.replace(R.id.mainFrame, new NewsMainFragment());
        ft.addToBackStack(null);
        ft.commit();
        break;
      case R.id.linearLayoutContents:
        FragmentTransaction ft1=getFragmentManager().beginTransaction();
        ft1.replace(R.id.mainFrame, new ContentMainFragment());
        ft1.addToBackStack(null);
        ft1.commit();
        break;
      case R.id.linearLayoutCalendar:
        FragmentTransaction ft2=getFragmentManager().beginTransaction();
        ft2.replace(R.id.mainFrame, new CalendarMainFragment());
        ft2.addToBackStack(null);
        ft2.commit();
        break;
      case R.id.linearLayoutInfo:
        FragmentTransaction ft3=getFragmentManager().beginTransaction();
        ft3.replace(R.id.mainFrame, new InfoMainFragment());
        ft3.addToBackStack(null);
        ft3.commit();
        break;
    }
  }

}

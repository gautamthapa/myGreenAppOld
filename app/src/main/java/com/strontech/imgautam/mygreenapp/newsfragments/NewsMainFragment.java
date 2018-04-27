package com.strontech.imgautam.mygreenapp.newsfragments;


import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.app.AppCompatActivity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import android.widget.LinearLayout;
import com.strontech.imgautam.mygreenapp.R;

/**
 * A simple {@link Fragment} subclass.
 */
public class NewsMainFragment extends Fragment {

  private LinearLayout linearLayoutNews;
  private View view;

  public NewsMainFragment() {
    // Required empty public constructor
  }

  @Override
  public void onResume() {
    super.onResume();
    if(((AppCompatActivity)getActivity()).getSupportActionBar()!=null){
      ((AppCompatActivity)getActivity()).getSupportActionBar().hide();
    }
  }

  @Override
  public View onCreateView(LayoutInflater inflater, ViewGroup container,
      Bundle savedInstanceState) {
    // Inflate the layout for this fragment
    View view = inflater.inflate(R.layout.fragment_news_main, container, false);

    initViews();
    initListeners();
    initObjects();

    return view;
  }


  private void initViews() {

  }

  private void initListeners() {
  }

  private void initObjects() {
  }


  @Override
  public void onStop() {
    super.onStop();
    if(((AppCompatActivity)getActivity()).getSupportActionBar()!=null){
      ((AppCompatActivity)getActivity()).getSupportActionBar().show();
    }
  }
}

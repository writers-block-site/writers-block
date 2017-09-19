@extends('layouts.app')

@section('content')

<div class="container text-center aboutUs">
    <h1 class='title'>Who We Are</h1>
    <div class="row">
        <p class='col-sm-offset-2 col-sm-8 body'>
            We are a team of two passionate full stack developers dedicated and determined to finding solutions to your needs
        </p>

        <div class="row">

            <div class="col-md-6">

                    <img class="daniel" src="/css/img/DanielRojoGuttierrez1 (1).jpg" alt="">

                    <div class="row">

                        <span class="col-md-12 email"></span>

                        <div class="col-md-12">

                            <a class="email"href="mailto:&#100;&#097;&#110;&#105;&#101;&#108;&#114;&#111;&#106;&#111;&#057;&#052;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">  &#100;&#097;&#110;&#105;&#101;&#108;&#114;&#111;&#106;&#111;&#057;&#052;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a>
                        </div>

                        <div class="col-md-12">

                            <a class="email"href="http://github.com/duhanyul"><span>Github: Duhanyul</span></a>

                        </div>

                    </div>

            </div>

            <div class="col-md-6">

                    <img class="daniel" src="/css/img/DouglassHooker1.jpg" alt="">

                <div class="row">


                        <div class="col-md-12">

                            <a class="email"href="mailto:&#068;&#111;&#117;&#103;&#108;&#097;&#115;&#115;&#072;&#111;&#111;&#107;&#101;&#114;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">  &#068;&#111;&#117;&#103;&#108;&#097;&#115;&#115;&#072;&#111;&#111;&#107;&#101;&#114;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a>

                        </div>

                        <div class="col-md-12">

                            <a class="email"href="https://github.com/DukeFerdinand"><span>Github: DukeFerdinand</span></a>
                        </div>


                </div>

            </div>

        </div>
        <div class="container">

            <div class="row">
                <button class="btn btn-primary"id="flow"type="button" name="button">Application Model</button>


            </div>
            <div class="row">
                <img id="flowChart"src="/css/img/flowChartCrop.png" style="display:none"alt="">
            </div>
        </div>

        <div class="row">

                <a class="title"href="https://github.com/writers-block-site/writers-block"><h1>Contribute to Writer's Block</h1></a>

        </div>

    </div>
</div>
<script type="text/javascript">
    var button = document.getElementById("flow");

    button.addEventListener("click",show);

    function show()
    {
        var flowChart = document.getElementById("flowChart");
        if(flowChart.style.display == "none")
        {
            flowChart.style.display = "inline";
        }
        else
        {
            flowChart.style.display = "none";
        }
    }


</script>

@endsection

function start()
    {
        var s = "<table align='center'>";
        var chern = "";
        var y = parseInt(document.getElementById("users2").value);
        var temp = 0;
        var x = parseInt(document.getElementById("users").value);
        var str = "";
        var str2 = "";
        var s2 = "<table>";

        var capital = parseInt(document.getElementById("users3").value);

        N = (capital/x);
        Nn = 0;
        var z = 0;
        if (capital < x)
                    {
                    alert("Введенные данные некорректны");
                    return;
                    }
        document.getElementById("but").style.visibility = "hidden";
        s2+="<tr><td>Капитал  </td></tr>";
        if (capital == x)
            {
            while (Nn < capital)
                {
                Nn = Nn + N;
                z +=1;
                s2+= "<tr><td height='32' value='" + Nn + "'id='cap" + z + "' size='4%'>" + parseInt(Nn) + "</td></tr>";
                }
            }
        else
        {
        while (Nn < capital &&  Nn < capital - 1)
            {
                Nn = Nn + N;
                z +=1;
                s2+= "<tr><td height='32' value='" + Nn + "'id='cap" + z + "' size='4%'>" + parseInt(Nn) + "</td></tr>";
            }
        }
        s2 += "</table>"

        var codeinput = 0;

        if (x<1 || x > 15 || y<1 || y>15 || capital <1 || isNaN(x) == 1 || isNaN(y) == 1 || isNaN(capital) == 1)
            {
                location.reload();
                alert("Введенные данные некорректны");
            }
        else
            {
                for(var i = 0; i < x + 1; i++)
                    {
                        if (i==0)
                            {
                                while (temp < y)
                                    {
                                        str += "<td align='center' >П(" + (temp+1) + ")</td>";
                                        temp += 1;
                                    }
                                s += "<tr>" + str + "</tr>";
                             }
                        else
                            {
                                temp = 0;
                                while (temp < y)
                                    {
                                        codeinput += 1;
                                        str2 += "<td><input size='5%' id='codeinput" + codeinput + "'></td>";
                                        temp += 1;
                                    }
                                 s += "<tr>" + str2 + "</tr>";
                                 str2 = "";
                            }
                     }
                s += "</table>";

            var s3 = "<table><tr><td>" + s2 + "</td>" + "<td>" + s + "</td></tr></table>"
            document.body.innerHTML += s3;
            var s4 = "<input type='button' class='btn btn-danger' value='Отправить данные' onclick='raspr()'><br><br><input type='button' class='btn btn-danger' value='Создать таблицу заново' onclick='location.reload()'>";
            document.body.innerHTML += s4;
            var edition="<p>_______________________________<p>";
            document.body.innerHTML += edition;
            document.getElementById("users").disabled = "disabled";
            document.getElementById("users2").disabled = "disabled";
            document.getElementById("users3").disabled = "disabled";
            document.getElementById("users").value = x;
            document.getElementById("users2").value = y;
            document.getElementById("users3").value = capital;
            }
    }
function raspr()
    {
        let y = parseInt(document.getElementById("users2").value);
        let x = parseInt(document.getElementById("users").value);
        var cols = y;
        console.log(y)
        console.log(x)
        var rows = x;
        var n = y, m = x;
        var mas = [];
        var codeinputs = [];
        var temp = -1;
        for (var i = 0; i < m*n; i++)
            {
                codeinputs.push("codeinput"+(i+1));
            }
        for (var i = 0; i < m; i++)
            {
                mas[i]=[];
                for (var j=0;j<n;j++)
                    {
                        temp +=1;
                        mas[i][j]=parseInt(document.getElementById(codeinputs[temp]).value);
                     }
             }

        for (var i = 0; i < m; i++)
            {
            for (var j=0;j<n;j++)
                {
                if (mas[i][j]<1 || mas[i][j]>9999 || isNaN(mas[i][j]) == 1)
                    {
                    alert("Введенные данные некорректны");
                    return;
                    }
                }
            }
        var Zmax = 0;
        var Z = [];
        for (var i = 0; i < 25; i++)
            {
                Z[i]=[];
                for (var j=0;j<100;j++)
                    {
                        Z[i][j]=0;
                    }
            }
        var B = [];
        for (var i = 0; i < 100; i++)
            {
            B[i] = 0;
            }
        var Usub = [];
        for (var i = 1; i < 25; i++)
            {
                Usub[i]=[];
                for (var j=0;j<100;j++)
                    {
                        Usub[i][j]=0;
                    }
            }
        var Uoptim = [];
        for (var i = 0; i < 25; i++)
            {
            Uoptim[i] = 0;
            }
        for (var i = 1; i < n + 1; i++)
            {
            for (var j = 1; j < m+1; j++)
                {
                Z[i][j] = mas[j-1][i-1];
                }
            }
        for (var i = 1; i < n+1; i++)
            {
            for (var j=2;j<m+1;j++)
                {
                if (Z[i][j] < Z[i][j-1])
                    {
                    alert("Значения прибыли предприятий должны быть неубывающие ");
                    return;
                    }
                }
            }
        var x1 = 0;
        var sMax = 0;
        x = 0;
        var u0=0;
        var u1=0;
        y = 0;
        var s = 0;
        for (var i=n; i > 0; i--)
            {
            x1 = m;
            if (i==1)
                {
                x1=0;
                }
            for(x=0;x<x1+1;x++)
                {
                u0=0;
                u1=m-x;
                if (i==n)
                    {
                    u0=u1;
                    }
                for (var u=u0; u<u1+1;u++)
                    {
                    y=x+u;
                    s = Z[i][u]+B[y];
                    if (u<=u0 || s>sMax)
                        {
                        sMax=s;
                        Usub[i][x]=u;
                        }
                    }
                B[x]=sMax;
                }
            }
        Zmax=B[0];
        x=0;
        var maxum = 'Предприятий: ' + cols + '\n';
        maxum += 'Капиталовложений: ' + rows + '\n';
        var Kn = parseInt(document.getElementById("cap" + m).innerText);
        maxum += 'Капитал: ' + Kn + ' y.e. \n';
        maxum += "Максимальная прибыль: " + Zmax + '\n';
        var Nn = m;
        var Qn = Kn/Nn;
        var P = 0;
        var itog = '';
        var diver = "<textarea readonly='readonly' name='result' cols='30' rows='" + (cols+4) + "'>";
        for (i=1; i < n+1; i++)
            {
            Uoptim[i]=Usub[i][x];
            x = x+ Uoptim[i]
            P = Uoptim[i]*Qn;
            itog += "П[" + i + "] выделить " + parseInt(P) + " у.е.,\n";
            }
        var tab = '<textarea hidden name="out_arr" readonly="readonly" id="out_arr"></textarea>';
        diver +=  maxum + itog + "</textarea>" + tab;
        temp = -1;
        for (var i = 0; i < m; i++)
            {
                for (var j=0;j<n;j++)
                    {
                        temp +=1;
                        document.getElementById(codeinputs[temp]).disabled = 'disabled';
                     }
             }
        var forms = "<form action='/distribution/' method=post enctype=multipart/form-data>" + diver + "<br><input type='submit' class='btn btn-danger' value='Сохранить результат в таблицу'></form>";
        document.body.innerHTML += forms;
        var out_arr = document.getElementById('out_arr');
        strtable='';
        for (var i = 0; i < m; i++)
            {
            for (var j=0;j<n;j++)
                {
                strtable += mas[i][j] + ' '
                }
            strtable += '\n';
            }
        out_arr.innerHTML = strtable;
        var edition="<p>_______________________________<p>";
        document.body.innerHTML += edition;
        alert('Результат получен!')
    }

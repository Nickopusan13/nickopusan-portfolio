import Plot from "react-plotly.js";
import { Datum, PlotType } from "plotly.js";

interface PlotlyChartProps {
  data: Record<string, unknown>[];
  x: string;
  y: string;
  group?: string;
  type: PlotType;
}

export default function DynamicPlotlyChart({
  data,
  x,
  y,
  group,
  type,
}: PlotlyChartProps) {
  if (!data?.length)
    return (
      <div className="flex items-center justify-center h-100 text-slate-400">
        <p className="text-lg">No data available</p>
      </div>
    );

  const colors = [
    "#6366f1",
    "#8b5cf6",
    "#06b6d4",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#ec4899",
    "#14b8a6",
  ];

  const traces: Plotly.Data[] = [];

  // PIE CHART
  if (type === "pie") {
    const labels = data.map((row) => row[x] as string);
    const values = data.map((row) => Number(row[y]) as Datum);
    traces.push({
      type: "pie",
      labels,
      values,
      textinfo: "label+percent",
      textposition: "inside",
      textfont: {
        size: 14,
        color: "#ffffff",
        family: "Inter, system-ui, sans-serif",
      },
      marker: {
        colors: colors,
        line: {
          color: "#1e293b",
          width: 2,
        },
      },
      hole: 0.4,
      hovertemplate:
        "<b>%{label}</b><br>Value: %{value:,.2f}<br>Percent: %{percent}<extra></extra>",
      pull: 0.02,
    });
  }

  // BOX PLOT
  else if (type === "box") {
    if (group) {
      const groups = Array.from(
        new Set(data.map((row) => row[group] as string)),
      );
      groups.forEach((g, i) => {
        const filtered = data.filter((row) => row[group] === g);
        traces.push({
          y: filtered.map((row) => row[y] as Datum),
          x: filtered.map((row) => row[x] as Datum),
          name: g,
          type: "box",
          marker: {
            color: colors[i % colors.length],
            opacity: 0.7,
          },
          line: {
            color: colors[i % colors.length],
            width: 2,
          },
          boxmean: "sd",
          hovertemplate: `<b>${g}</b><br>Value: %{y:,.2f}<extra></extra>`,
        });
      });
    } else {
      traces.push({
        y: data.map((row) => row[y] as Datum),
        x: data.map((row) => row[x] as Datum),
        type: "box",
        name: y,
        marker: {
          color: colors[0],
          opacity: 0.7,
        },
        line: {
          color: colors[0],
          width: 2,
        },
        boxmean: "sd",
        hovertemplate: `${x}: %{x}<br>${y}: %{y:,.2f}<extra></extra>`,
      });
    }
  }

  // HISTOGRAM
  else if (type === "histogram") {
    if (group) {
      const groups = Array.from(
        new Set(data.map((row) => row[group] as string)),
      );
      groups.forEach((g, i) => {
        const filtered = data.filter((row) => row[group] === g);
        traces.push({
          x: filtered.map((row) => row[x] as Datum),
          name: g,
          type: "histogram",
          marker: {
            color: colors[i % colors.length],
            line: {
              color: "#1e293b",
              width: 1,
            },
            opacity: 0.75,
          },
          hovertemplate: `<b>${g}</b><br>Range: %{x}<br>Count: %{y}<extra></extra>`,
        });
      });
    } else {
      traces.push({
        x: data.map((row) => row[x] as Datum),
        type: "histogram",
        name: x,
        marker: {
          color: colors[0],
          line: {
            color: "#1e293b",
            width: 1,
          },
          opacity: 0.75,
        },
        hovertemplate: `Range: %{x}<br>Count: %{y}<extra></extra>`,
      });
    }
  }

  // BAR CHART
  else if (type === "bar") {
    if (group) {
      const groups = Array.from(
        new Set(data.map((row) => row[group] as string)),
      );
      groups.forEach((g, i) => {
        const filtered = data.filter((row) => row[group] === g);
        traces.push({
          x: filtered.map((row) => row[x] as Datum),
          y: filtered.map((row) => row[y] as Datum),
          name: g,
          type: "bar",
          marker: {
            color: colors[i % colors.length],
            line: {
              color: "#1e293b",
              width: 1.5,
            },
            opacity: 0.85,
          },
          hovertemplate: `<b>${g}</b><br>${x}: %{x}<br>${y}: %{y:,.2f}<extra></extra>`,
          text: filtered.map((row) => Number(row[y]).toFixed(1)),
          textposition: "outside",
          textfont: {
            size: 10,
            color: "#cbd5e1",
          },
        });
      });
    } else {
      const yValues = data.map((row) => Number(row[y]));
      const barColors = yValues.map((val) =>
        val >= 0 ? "#10b981" : "#ef4444",
      );

      traces.push({
        x: data.map((row) => row[x] as Datum),
        y: data.map((row) => row[y] as Datum),
        type: "bar",
        name: y,
        marker: {
          color: barColors,
          line: {
            color: "#1e293b",
            width: 1.5,
          },
          opacity: 0.85,
        },
        hovertemplate: `${x}: %{x}<br>${y}: %{y:,.2f}<extra></extra>`,
        text: yValues.map((v) => v.toFixed(1)),
        textposition: "outside",
        textfont: {
          size: 10,
          color: "#cbd5e1",
        },
      });
    }
  }

  // SCATTER PLOT
  else if (type === "scatter") {
    if (group) {
      const groups = Array.from(
        new Set(data.map((row) => row[group] as string)),
      );
      groups.forEach((g, i) => {
        const filtered = data.filter((row) => row[group] === g);
        traces.push({
          x: filtered.map((row) => row[x] as Datum),
          y: filtered.map((row) => row[y] as Datum),
          name: g,
          type: "scatter",
          mode: "markers",
          marker: {
            color: colors[i % colors.length],
            size: 10,
            line: {
              color: "#1e293b",
              width: 1,
            },
            opacity: 0.8,
          },
          hovertemplate: `<b>${g}</b><br>${x}: %{x:,.2f}<br>${y}: %{y:,.2f}<extra></extra>`,
        });
      });
    } else {
      traces.push({
        x: data.map((row) => row[x] as Datum),
        y: data.map((row) => row[y] as Datum),
        type: "scatter",
        mode: "markers",
        name: y,
        marker: {
          color: colors[0],
          size: 10,
          line: {
            color: "#1e293b",
            width: 1,
          },
          opacity: 0.8,
        },
        hovertemplate: `${x}: %{x:,.2f}<br>${y}: %{y:,.2f}<extra></extra>`,
      });
    }
  }

  const getChartTitle = () => {
    const typeMap: Record<string, string> = {
      bar: "Bar Chart",
      line: "Line Chart",
      scatter: "Scatter Plot",
      pie: "Pie Chart",
      box: "Box Plot",
      histogram: "Histogram",
      area: "Area Chart",
    };

    const chartName =
      typeMap[type] || type.charAt(0).toUpperCase() + type.slice(1);
    return `${chartName}: ${y}${group ? ` by ${group}` : ""}`;
  };

  const commonLayout: Partial<Plotly.Layout> = {
    title: {
      text: getChartTitle(),
      font: {
        size: 22,
        color: "#e2e8f0",
        family: "Inter, system-ui, sans-serif",
      },
      x: 0.5,
      xanchor: "center",
    },
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(15, 23, 42, 0.4)",
    hovermode: "closest",
    hoverlabel: {
      bgcolor: "#1e293b",
      bordercolor: "#6366f1",
      font: {
        size: 13,
        color: "#ffffff",
        family: "Inter, system-ui, sans-serif",
      },
    },
    showlegend: type !== "pie",
    legend: {
      orientation: "h",
      x: 0.5,
      xanchor: "center",
      y: -0.15,
      yanchor: "top",
      bgcolor: "rgba(15, 23, 42, 0.8)",
      bordercolor: "#475569",
      borderwidth: 1,
      font: {
        size: 12,
        color: "#e2e8f0",
        family: "Inter, system-ui, sans-serif",
      },
    },
    margin: { t: 80, b: 100, l: 80, r: 40 },
    autosize: true,
  };

  // Axis configuration for non-pie charts
  const axisConfig =
    type !== "pie"
      ? {
          xaxis: {
            title: {
              text: x,
              font: {
                size: 14,
                color: "#94a3b8",
                family: "Inter, system-ui, sans-serif",
                weight: 600,
              },
            },
            gridcolor: "#334155",
            gridwidth: 1,
            tickfont: {
              size: 12,
              color: "#cbd5e1",
              family: "Inter, system-ui, sans-serif",
            },
            linecolor: "#475569",
            linewidth: 2,
            zeroline: false,
          },
          yaxis: {
            title: {
              text: type === "histogram" ? "Count" : y,
              font: {
                size: 14,
                color: "#94a3b8",
                family: "Inter, system-ui, sans-serif",
                weight: 600,
              },
            },
            gridcolor: "#334155",
            gridwidth: 1,
            tickfont: {
              size: 12,
              color: "#cbd5e1",
              family: "Inter, system-ui, sans-serif",
            },
            linecolor: "#475569",
            linewidth: 2,
            zeroline: true,
            zerolinecolor: "#475569",
            zerolinewidth: 2,
          },
        }
      : {};

  // Special configurations per chart type
  const specialConfig: Partial<Plotly.Layout> = {};

  if (type === "bar" && group) {
    specialConfig.barmode = "group";
    specialConfig.bargap = 0.15;
    specialConfig.bargroupgap = 0.1;
  } else if (type === "bar") {
    specialConfig.bargap = 0.2;
  }

  if (type === "histogram") {
    specialConfig.barmode = "overlay";
    specialConfig.bargap = 0.05;
  }

  return (
    <div className="w-full h-full p-4 rounded-xl bg-linear-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-sm border border-slate-700/30 shadow-2xl">
      <Plot
        data={traces}
        layout={{
          ...commonLayout,
          ...axisConfig,
          ...specialConfig,
        }}
        style={{ width: "100%", height: "500px" }}
        config={{
          responsive: true,
          displayModeBar: true,
          displaylogo: false,
          modeBarButtonsToRemove: ["lasso2d", "select2d"],
          toImageButtonOptions: {
            format: "png",
            filename: `chart_${type}_${Date.now()}`,
            height: 1080,
            width: 1920,
            scale: 2,
          },
        }}
        useResizeHandler={true}
      />
    </div>
  );
}

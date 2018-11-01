# Resource Monitor

A simple cli tool to monitor resources, primarily on unix systems.

## Contents

- [Quick Start](#quick-start)
- [Change Logging Interface](#change-logging-interval)
- [Log To File](#log-to-file)
- [Custom Commands](#custom-commands)
- [Set Timezone](#set-timezone)
- [No Permissions?](#no-permissions)

## Quick Start

Install it with:

```bash
npm i -g resource-monitor
```

Then start it:

```bash
resource-monitor
```

This will log to console default `"ps -aux | egrep 'node|mysql|redis'"` and `top -n 1 -b | egrep -w 'redis|node|mysql|top|Tasks|cpu|Mem|Swap'` commands every 10 seconds.

## Change Logging Interval

You can change interval with `+interval-sec [number]` e.g.:

```bash
resource-monitor +interval-sec 30
```

This will result in logging once every 30 seconds. You can also specify interval in minutes:

```bash
resource-monitor +interval-min 5
```

## Log to File

To log to file:

```bash
resource-monitor 1>monitor.out
```

## Custom Commands

To specify your own commands to run, use `+cmd` command line argument:

```bash
resource-monitor +cmd ps:-ef top:-n:1:-b
```

This will run `ps -ef` and `top -n 1 -b` every 10 seconds.

## Set Timezone

To set timezone use `+tz` command line argument. This will result in time being printed in your timezone:

```
resource-monitor +tz Asia/Calcutta
```

You can see the list of possible values [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

## No Permissions

If you don't have permissions to install global npm modules, you can instead install it locally with:

```bash
npm i resource-monitor
```

And then start with `node node_modules/.bin/resource-monitor`.
